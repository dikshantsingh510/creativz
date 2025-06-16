import { ChartAreaInteractive } from "@/components/dashboard/analytics/chart-area-interactive";
import { SectionCards } from "@/components/dashboard/analytics/section-cards";
import linksdata from "../linksdata.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crativez | Dashboard Analytics",
  description: "Analytics about our URL shortener service",
};

// interface Url {
//   id: number;
//   longUrl: string;
//   shortCode: string;
//   createdAt: string;
//   clicks: number;
// }
const userUrls = linksdata;

const StatsPage = () => {
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
            <ChartAreaInteractive
              avgClicks={avgClicks}
              totalClicks={totalClicks}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
