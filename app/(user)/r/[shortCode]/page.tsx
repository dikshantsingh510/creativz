import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Redirecting...",
  description: "You are being redirected to the original URL",
};

const RedirectPage = async ({
  params,
}: {
  params: Promise<{ shortCode: string }>;
}) => {
  const shortCode = (await params).shortCode;

  let url;

  try {
    // Fetch from PostgreSQL
    url = await prisma.url.findUnique({
      where: { shortCode },
      select: { longUrl: true },
    });

    if (!url) {
      return <RedirectPageComponent />;
    }

    // Increment click count
    await prisma.url.update({
      where: { shortCode },
      data: { clicks: { increment: 1 } },
    });

    // console.log(url.longUrl);
  } catch (err) {
    console.error("Database error:", err);
    return <RedirectPageComponent />;
  }

  // Redirect outside of try-catch
  if (url && url.longUrl) {
    redirect(url.longUrl);
  }

  // This should not be reached, but just in case
  return <RedirectPageComponent />;
};

const RedirectPageComponent = () => {
  return (
    <div className="relative flex flex-col w-full justify-center min-h-svh bg-background p-6 md:p-10">
      <div className="relative max-w-5xl mx-auto w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 362 145"
          className="absolute inset-0 w-full h-[50vh] opacity-[0.04] dark:opacity-[0.03] text-foreground"
        >
          <path
            fill="currentColor"
            d="M62.6 142c-2.133 0-3.2-1.067-3.2-3.2V118h-56c-2 0-3-1-3-3V92.8c0-1.333.4-2.733 1.2-4.2L58.2 4c.8-1.333 2.067-2 3.8-2h28c2 0 3 1 3 3v85.4h11.2c.933 0 1.733.333 2.4 1 .667.533 1 1.267 1 2.2v21.2c0 .933-.333 1.733-1 2.4-.667.533-1.467.8-2.4.8H93v20.8c0 2.133-1.067 3.2-3.2 3.2H62.6zM33 90.4h26.4V51.2L33 90.4zM181.67 144.6c-7.333 0-14.333-1.333-21-4-6.666-2.667-12.866-6.733-18.6-12.2-5.733-5.467-10.266-13-13.6-22.6-3.333-9.6-5-20.667-5-33.2 0-12.533 1.667-23.6 5-33.2 3.334-9.6 7.867-17.133 13.6-22.6 5.734-5.467 11.934-9.533 18.6-12.2 6.667-2.8 13.667-4.2 21-4.2 7.467 0 14.534 1.4 21.2 4.2 6.667 2.667 12.8 6.733 18.4 12.2 5.734 5.467 10.267 13 13.6 22.6 3.334 9.6 5 20.667 5 33.2 0 12.533-1.666 23.6-5 33.2-3.333 9.6-7.866 17.133-13.6 22.6-5.6 5.467-11.733 9.533-18.4 12.2-6.666 2.667-13.733 4-21.2 4zm0-31c9.067 0 15.6-3.733 19.6-11.2 4.134-7.6 6.2-17.533 6.2-29.8s-2.066-22.2-6.2-29.8c-4.133-7.6-10.666-11.4-19.6-11.4-8.933 0-15.466 3.8-19.6 11.4-4 7.6-6 17.533-6 29.8s2 22.2 6 29.8c4.134 7.467 10.667 11.2 19.6 11.2zM316.116 142c-2.134 0-3.2-1.067-3.2-3.2V118h-56c-2 0-3-1-3-3V92.8c0-1.333.4-2.733 1.2-4.2l56.6-84.6c.8-1.333 2.066-2 3.8-2h28c2 0 3 1 3 3v85.4h11.2c.933 0 1.733.333 2.4 1 .666.533 1 1.267 1 2.2v21.2c0 .933-.334 1.733-1 2.4-.667.533-1.467.8-2.4.8h-11.2v20.8c0 2.133-1.067 3.2-3.2 3.2h-27.2zm-29.6-51.6h26.4V51.2l-26.4 39.2z"
          />
        </svg>

        <div className="relative text-center z-[1] pt-52">
          <h1 className="text-3xl md:text-5xl lg:6xl font-bold text-foreground mb-4 md:mb-6 select-none">
            Whoops! URL missing!
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 opacity-50 font-dm-sans select-none">
            This short link doesn&apos;t exist or has been removed.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-y-3 gap-x-6">
            <Button className="-order-1 sm:order-none" asChild>
              <Link href="/">Take me home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectPage;
