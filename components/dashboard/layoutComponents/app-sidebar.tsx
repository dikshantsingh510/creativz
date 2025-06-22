"use client";

import * as React from "react";
import {
  IconChartBar,
  IconDashboard,
  IconLink,
  IconLogout,
  IconUser,
} from "@tabler/icons-react";

import { NavMain } from "@/components/dashboard/layoutComponents/nav-main";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import LogoutButton from "@/components/utils/logoutButton";
import Image from "next/image";
import { useTheme } from "next-themes";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard/home",
      icon: IconDashboard,
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: IconChartBar,
    },
    {
      title: "Links",
      url: "/dashboard/links",
      icon: IconLink,
    },
    {
      title: "Account",
      url: "/dashboard/account",
      icon: IconUser,
    },
  ],
  navSecondary: [
    {
      title: "Logout",
      url: "#",
      icon: IconLogout,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Avoid SSR mismatch

  const logoSrc =
    resolvedTheme === "dark" ? "/logo_dark.png" : "/logo_white.png";

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5  hover:bg-transparent"
            >
              <Link href="/" className=" relative h-[48px]">
                {/* <IconInnerShadowTop className="!size-5" />
                                  <span className="text-base font-semibold">URL Shortner</span> */}

                <Image
                  src={logoSrc}
                  alt="logo"
                  width={150}
                  height={40}
                  className=" absolute -left-2"
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <LogoutButton />
      </SidebarFooter>
    </Sidebar>
  );
}
