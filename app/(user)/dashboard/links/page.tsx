import { Button } from "@/components/ui/button";
import { SidebarSeparator } from "@/components/ui/sidebar";
import React, { use } from "react";

import LinkTable from "@/components/dashboard/links/link-table";
import Link from "next/link";
import { Metadata } from "next";
import { linksAction } from "@/actions/links.action";

export const metadata: Metadata = {
  title: "Crativez | URL Management",
  description: "Manage URLs in the Crativez application",
};

// Force dynamic rendering
export const dynamic = "force-dynamic";

const Page = () => {
  const { linksData } = use(linksAction());
  // console.log(data);

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-6 px-4 lg:px-6 py-6 md:gap-6">
        <div className="flex flex-col gap-2 md:gap-1">
          <h2 className="text-2xl font-semibold text-foreground">
            Your all Links
          </h2>
          <div className="flex flex-col sm:flex-row justify-between  gap-6 ">
            <p className="text-muted-foreground">
              Create and manage all your links from here.
            </p>
            <Button className="cursor-pointer">
              <Link href="/dashboard/home">Create Short Link</Link>
            </Button>
          </div>
        </div>
        <SidebarSeparator />

        <div className="overflow-hidden rounded-lg border">
          {linksData && <LinkTable data={linksData} />}
        </div>
      </div>
    </div>
  );
};

export default Page;
