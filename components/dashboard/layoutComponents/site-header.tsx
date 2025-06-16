import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/utils/toggle-darkmode";
import Breadcrumb from "@/components/dashboard/layoutComponents/breadcrumb";

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />

        <Breadcrumb />

        {/* <h1 className="text-base font-medium">{pathname}</h1> */}
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarFallback className="rounded-lg">DS</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">Dikshant Singh</span>
              {/* <span className="text-muted-foreground truncate text-xs">
                              dikshantsingh510@gmail.com
                            </span> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
