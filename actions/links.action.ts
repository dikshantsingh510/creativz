"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export async function linksAction() {
  try {
    //? Checking user session
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session?.user) {
      throw new Error("Unauthorized. Please log in.");
    }

    const linksData = await prisma.url.findMany({
      where: {
        userId: session.user.id,
      },
    });

    return {
      linksData,
    };
  } catch (error) {
    console.error(error);
    return {
      data: [],
    };
  }
}

export async function deleteLinkAction(id: number) {
  try {
    // Delete the URL from PostgreSQL
    await prisma.url.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
