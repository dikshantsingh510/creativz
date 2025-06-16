"use client";

import { useMemo } from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartBar,
  ChartPie,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Label,
  LabelList,
  Pie,
  PieChart,
  Sector,
  XAxis,
} from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import linksdata from "../../../app/(user)/dashboard/linksdata.json";

export const description = "An interactive area chart";

const userUrls = linksdata;

export function ChartAreaInteractive({
  totalClicks,
  avgClicks,
}: {
  totalClicks: number;
  avgClicks:number
}) {


  //? Get the top performaing url
  const topUrls = [...userUrls].sort((a, b) => b.clicks - a.clicks).slice(0, 5);

  // console.log(avgClicks, topUrls);

  //? prepared data for pie chart with numeric value

  const barChartData = useMemo(() => {
    return topUrls.map((url) => ({
      url: url.shortCode,
      clicks: url.clicks,
      longUrl: url.longUrl,
    }));
  }, [topUrls]);

  // console.log(barChartData);

  //? bar chart config

  const barChartConfig = {
    clicks: {
      label: "Clicks",
      color: "var(--chart-1)",
    },

    ...topUrls.reduce((acc, url, index) => {
      acc[url.shortCode] = {
        label: url.shortCode,
        color: `var(--chart-${index + 1})`,
      };
      return acc;
    }, {} as ChartConfig),
  };

  //? prepared data for pie chart with numeric value

  const pieChartData = useMemo(() => {
    return topUrls.map((url, index) => ({
      browser: url.shortCode,
      visitors: url.clicks,
      fill: `var(--chart-${index + 1})`,
    }));
  }, [topUrls]);

  //? pie chart config
  const pieChartConfig = {
    visitors: {
      label: "Clicks",
    },
    ...topUrls.reduce((acc, url, index) => {
      acc[url.shortCode] = {
        label: url.shortCode,
        color: `var(--chart-${index + 1})`,
      };
      return acc;
    }, {} as ChartConfig),
  };

  return (
    <Card className="shadow-sm bg-background">
      <CardHeader>
        <CardTitle>Top Performing URLs</CardTitle>
        <CardDescription>Top 5 URLs with most clicks</CardDescription>
      </CardHeader>
      <CardContent>
        {barChartData.length > 0 ? (
          <Tabs defaultValue="bar">
            <ScrollArea>
              <TabsList className="mb-3">
                <TabsTrigger value="bar" className="">
                  <ChartBar
                    className="-ms-0.5 me-1.5 opacity-60"
                    size={16}
                    aria-hidden="true"
                  />
                  Bar chart
                </TabsTrigger>
                <TabsTrigger value="pie" className="group ">
                  <ChartPie
                    className="-ms-0.5 me-1.5 opacity-60"
                    size={16}
                    aria-hidden="true"
                  />
                  Pie chart
                </TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <TabsContent value="bar" className="min-h-[400px] mt-4">
              {/* Bar Chart starts */}
              <Card>
                <CardHeader>
                  <CardTitle>URL Perfomance</CardTitle>
                  <CardDescription>Top 5 URLs with most clicks</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={barChartConfig}>
                    <BarChart
                      accessibilityLayer
                      data={barChartData}
                      margin={{
                        top: 20,
                      }}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="url"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={
                          <ChartTooltipContent
                            indicator="dot"
                            labelFormatter={(label) => `URL: ${label}`}
                          />
                        }
                      />

                      <Bar
                        dataKey="clicks"
                        fill="var(--color-primary)"
                        radius={8}
                      >
                        {barChartData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={`var(--chart-${index + 1})`}
                          />
                        ))}
                        <LabelList
                          position="top"
                          offset={12}
                          className="fill-foreground"
                          fontSize={12}
                        />
                      </Bar>
                    </BarChart>
                  </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2 text-sm">
                  <div className="flex gap-2 font-medium leading-none">
                    {avgClicks > 5 ? (
                      <>
                        Trending up by {((avgClicks / 5) * 100).toFixed(1)}%
                        this month{" "}
                        <TrendingUp className="size-4 text-green-500" />
                      </>
                    ) : (
                      <>
                        Coudl improve with only {5 - avgClicks} more clicks{" "}
                        <TrendingDown className="size-4 text-amber-500" />
                      </>
                    )}
                  </div>
                  <div className="leading-none text-muted-foreground">
                    Showing click count for your top {topUrls.length} URLs
                  </div>
                </CardFooter>
              </Card>

              {/* Bar Chart ends */}
            </TabsContent>
            <TabsContent value="pie" className="min-h-[400px] mt-4">
              {/* Pie Chart starts */}

              <Card className="flex flex-col">
                <CardHeader className="items-center pb-0">
                  <CardTitle>URL Clicks Distrubtion</CardTitle>
                  <CardDescription>
                    Top {topUrls.length} URLs with most clicks
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                  <ChartContainer
                    config={pieChartConfig}
                    className="mx-auto aspect-square max-h-[350px]"
                  >
                    <PieChart>
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />

                      <Pie
                        data={pieChartData}
                        dataKey="visitors"
                        nameKey="browser"
                        innerRadius={70}
                        strokeWidth={5}
                        activeIndex={0}
                        activeShape={({
                          outerRadius = 0,
                          ...props
                        }: PieSectorDataItem) => (
                          <Sector {...props} outerRadius={outerRadius + 10} />
                        )}
                      >
                        <Label
                          content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                              return (
                                <text
                                  x={viewBox.cx}
                                  y={viewBox.cy}
                                  textAnchor="middle"
                                  dominantBaseline={"middle"}
                                >
                                  <tspan
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    className="fill-foreground text-3xl font-bold"
                                  >
                                    {totalClicks.toLocaleString()}
                                  </tspan>
                                  <tspan
                                    x={viewBox.cx}
                                    y={(viewBox.cy || 20) + 20}
                                    className="fill-muted-foreground text-xs mb-2"
                                  >
                                    Total Clicks
                                  </tspan>
                                </text>
                              );
                            }
                          }}
                        ></Label>
                      </Pie>
                    </PieChart>
                  </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2 font-medium leading-none">
                    {userUrls.length > 0 && (
                      <>
                        {avgClicks > 5 ? (
                          <>
                            Trending up by {((avgClicks / 5) * 100).toFixed(1)}%
                            this month{" "}
                            <TrendingUp className="size-4 text-green-500" />
                          </>
                        ) : (
                          <>
                            Could improve with only {5 - avgClicks} more clicks{" "}
                            <TrendingDown className="size-4 text-amber-500" />
                          </>
                        )}
                      </>
                    )}
                  </div>
                  <div className="leading-none text-muted-foreground">
                    Showing click count for your top {topUrls.length} URLs
                  </div>
                </CardFooter>
              </Card>
              {/* Pie Chart ends */}
            </TabsContent>
          </Tabs>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            No URL data available yet. Create some short URLs to see the stats.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
