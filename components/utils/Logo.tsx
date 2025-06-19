"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Avoid SSR mismatch

  const logoSrc =
    resolvedTheme === "dark" ? "/logo_dark.png" : "/logo_white.png";
  return (
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
  );
};

export default Logo;
