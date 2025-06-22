
"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
} from "@/components/landing_page/resizable-navbar";

import { ButtonColorful } from "@/components/ui/button-colorful";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const isMobile = useIsMobile();
  const navItems = [
    {
      name: "Overview",
      link: "#hero",
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "FAQ",
      link: "#faq",
    },
    {
      name: "Dashboard",
      link: "/dashboard",
    },
  ];

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody visible={true}>
          <NavbarLogo />
          {!isMobile && <NavItems items={navItems} />}
          <ButtonColorful  />
        </NavBody>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
