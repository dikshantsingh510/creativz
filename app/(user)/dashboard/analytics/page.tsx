import { ChartAreaInteractive } from "@/components/dashboard/analytics/chart-area-interactive";
import { SectionCards } from "@/components/dashboard/analytics/section-cards";

import { Metadata } from "next";
import { use } from "react";
import { linksAction } from "@/actions/links.action";

export const metadata: Metadata = {
  title: "Crativez | Dashboard Analytics",
  description: "Analytics about our URL shortener service",
};

// Force dynamic rendering
export const dynamic = "force-dynamic";

const StatsPage = () => {
  const { linksData } = use(linksAction());
  const userUrls = linksData || []; // Provide fallback for undefined

  //? calculate total clicks
  const totalClicks = userUrls.reduce((sum, url) => sum + url.clicks, 0);

  //? calculate average clicks per URL
  const avgClicks =
    userUrls.length > 0
      ? Math.round((totalClicks / userUrls.length) * 10) / 10
      : 0;

  //? calculate total urls
  const totalUrls = userUrls.length;

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          {/* <h1 className="text-3xl font-bold mb-8 text-center">
            URL Statistics
          </h1> */}
          <SectionCards
            avgClicks={avgClicks}
            totalClicks={totalClicks}
            totalUrls={totalUrls}
          />
          <div className="px-4 lg:px-6">
            {linksData && linksData.length > 0 && (
              <ChartAreaInteractive
                avgClicks={avgClicks}
                totalClicks={totalClicks}
                data={linksData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
