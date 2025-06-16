import {
  IconClick,
  IconHandClick,
  IconLink,
  IconQrcode,
} from "@tabler/icons-react";

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SectionCards({
  totalClicks,
  avgClicks,
  totalUrls,
}: {
  totalClicks: number;
  avgClicks: number;
  totalUrls: number;
}) {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card h-fit">
        <CardHeader>
          <CardDescription>Total URLs</CardDescription>
          <CardTitle className="text-3xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {totalUrls}
          </CardTitle>
          <CardAction>
            <Button
              variant="default"
              className="w-10 h-10 rounded-full text-[48px]"
            >
              <IconLink width={48} height={48} />
            </Button>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start justify-center gap-1.5 text-sm">
          <div className="text-muted-foreground">Number of URLs created</div>
        </CardFooter>
      </Card>
      <Card className="@container/card h-fit">
        <CardHeader>
          <CardDescription>Total Clicks</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {totalClicks}
          </CardTitle>
          <CardAction>
            <Button
              variant="default"
              className="w-10 h-10 rounded-full text-[48px]"
            >
              <IconClick width={48} height={48} />
            </Button>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            Total clicks across all URLs
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card h-fit">
        <CardHeader>
          <CardDescription>Average Clicks</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {Math.round(avgClicks)}
          </CardTitle>
          <CardAction>
            <Button
              variant="default"
              className="w-10 h-10 rounded-full text-[48px]"
            >
              <IconHandClick width={48} height={48} />
            </Button>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">Average clicks per URL</div>
        </CardFooter>
      </Card>
      <Card className="@container/card h-fit">
        <CardHeader>
          <CardDescription>QR Codes</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {totalUrls}
          </CardTitle>
          <CardAction>
            <Button
              variant="default"
              className="w-10 h-10 rounded-full text-[48px]"
            >
              <IconQrcode width={48} height={48} />
            </Button>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">Number of QR Code created</div>
        </CardFooter>
      </Card>
    </div>
  );
}
