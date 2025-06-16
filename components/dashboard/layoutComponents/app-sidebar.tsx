"use client"

import * as React from "react"
import {
  IconChartBar,
  IconDashboard,
  IconInnerShadowTop,
  IconLink,
  IconLogout,
  IconUser,
} from "@tabler/icons-react"

import { NavMain } from "@/components/dashboard/layoutComponents/nav-main"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import LogoutButton from "@/components/utils/logoutButton"


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
    }
  ],
  
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">URL Shortner</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <LogoutButton/>
      </SidebarFooter>
    </Sidebar>
  )
}
