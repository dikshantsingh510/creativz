"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { generateShortCode, isValidUrl } from "@/lib/urlServices";
import { headers } from "next/headers";

interface StateInterface {
  success?: string;
  error?: string;
  data?: string;
}

export async function shortenUrlAction(
  prevState: StateInterface,
  formData: FormData
): Promise<StateInterface> {
  //? Checking user session
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    return { error: "Unauthorized. Please log in." };
  }

  //? Get form Data and validating url
  const longUrl = formData.get("longUrl") as string;
  const customCode = formData.get("customCode") as string;

  if (!longUrl || !isValidUrl(longUrl)) {
    return { error: "Invalid or missing URL" };
  }

  if (
    customCode &&
    (customCode.length < 3 ||
      customCode.length > 20 ||
      !/^[a-zA-Z0-9_-]+$/.test(customCode))
  ) {
    return { error: "Invalid custom code. Use 3–20 alphanumeric characters." };
  }

  //? Generating short code if custom code not provided

  const shortCode = customCode?.trim() || generateShortCode();

  try {
    //? Checking if url is exist
    const existingUrl = await prisma.url.findUnique({
      where: { shortCode },
    });
    if (existingUrl) {
      return { error: "Short code already taken" };
    }

    //? Creating url and saving it to database
    const newUrl = await prisma.url.create({
      data: {
        shortCode,
        longUrl,
        clicks: 0,
        userId: session?.user.id,
      },
    });

    return {
      success: "Short URL created successfully",
      data: newUrl.shortCode,
    };
  } catch (err) {
    console.error(err);
    return { error: "Failed to create URL" };
  }
}
