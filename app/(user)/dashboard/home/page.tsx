import GenerateShortUrl from "@/components/dashboard/home/generateShortUrl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crativez | Dashboard ",
  description: "Dashboard page for generating short urls",
};

export default function Page() {
 

  return (
    <div className="flex flex-1 flex-col ">
      <div className="@container/main flex flex-1 flex-col items-center gap-6 px-4 lg:px-6 py-6 md:gap-6 ">
        <h2 className="text-center text-5xl font-semibold">
          Shorten Your Long Links :)
        </h2>
        <p className="text-muted-foreground text-base text-center max-w-xl">
          This Url Shortner is a custom short link personalization tool that
          enables you to target, engage and drive more customers. Get started
          for free
        </p>
        <GenerateShortUrl/>
      </div>
    </div>
  );
}
