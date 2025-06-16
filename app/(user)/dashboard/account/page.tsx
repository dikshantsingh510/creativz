import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Crativez | Dashboard user Account",
  description: "Crativez Dashboard user account page",
};

const page = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-6 px-4 lg:px-6 py-6 md:gap-6">
        <div className="flex flex-col gap-2 md:gap-1">
          <h2 className="text-3xl font-semibold text-foreground">
            Your personal profile
          </h2>
          <div className="flex flex-col sm:flex-row justify-start gap-6 ">
            <p className="text-muted-foreground">
              You can see your personal details here.
            </p>
          </div>
        </div>

        <div className="border p-6 flex justify-start items-center gap-6 rounded-2xl">
          <div className="relative rounded-xl w-12 h-12 flex justify-center items-center bg-primary ring-4 ring-primary/40">
            <Avatar>
              <AvatarFallback className="bg-transparent font-bold text-white">
                DS
              </AvatarFallback>
            </Avatar>
            <span className="border-background absolute -end-1 -bottom-1 size-3 rounded-full border-2 bg-emerald-500"></span>
          </div>
          <div>
            <p className="font-semibold text-xl">Dikshant Singh</p>
            <span className="text-muted-foreground text-base">
              @dikshantsingh
            </span>
          </div>
        </div>

        <div className="border p-6 flex flex-col gap-6 rounded-2xl">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className=" flex-1/2">
              <span className="text-muted-foreground text-base">Name</span>
              <p className="font-semibold text-xl">Dikshant Singh</p>
            </div>
            <div className=" flex-1/2">
              <span className="text-muted-foreground text-base">Email</span>
              <p className="font-semibold text-xl">dikshantsingh510@gamil</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1/2">
              <span className="text-muted-foreground text-base">
                Created at
              </span>
              <p className="font-semibold text-xl">15 June 2025</p>
            </div>
            <div className="flex-1/2">
              <span className="text-muted-foreground text-base">Urls</span>
              <p className="font-semibold text-xl">35 url created</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
