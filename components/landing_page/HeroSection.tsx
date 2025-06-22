"use client";

import { Heropill } from "@/components/magicui/animated-gradient-text";
import { ChevronRight, LinkIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import HeroMarquee from "@/components/landing_page/HeroMarquee";
import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";

const HeroSection = ({
  title = "It's free, Just Register!",
  subtitle = {
    regular: "Shorten Links, Share Smarter with",
    gradient: " Custom URLs, QR Codes.",
  },
  description = "Create custom, trackable short URLs with QR codes for free. Sign up to start shortening in seconds!",
  ctaText = "Shorten Now",
  ctaHref = "/dashboard",
}) => {
  const { setTheme } = useTheme();
  const isMobile = useIsMobile();

  useEffect(() => {
    setTheme("dark"); // Set theme to dark when component mounts
  }, [setTheme]);

  return (
    <section className="relative max-w-full mx-auto z-1 " id="hero">
      <div className="max-w-screen-xl z-10 mx-auto px-4 pt-40 gap-12  md:px-8">
        <div className="space-y-12 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
          {/* Hero pill */}
          <BlurFade delay={0.25} inView>
            <Heropill>{title}</Heropill>
          </BlurFade>
          {/* HERO Main Heading*/}
          <BlurFade delay={0.25 * 2} inView>
            <h2 className="text-4xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
              {subtitle.regular}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-200">
                {subtitle.gradient}
              </span>
            </h2>
          </BlurFade>

          {/* Hero paragraph */}
          <BlurFade delay={0.25 * 3} inView>
            <p className="max-w-2xl mx-auto text-landingpage-secondary-foreground/70 leading-tight">
              {description}
            </p>
          </BlurFade>

          {/* Search bar */}
          <BlurFade delay={0.25 * 4} inView>
            <div className="relative max-w-2xl mx-auto w-full">
              <div className="bg-[#1c1528] rounded-full p-3 flex items-center border border-landingpage-input">
                <button className="p-2 rounded-full  transition-all">
                  <LinkIcon className="w-5 h-5 text-purple-400" />
                </button>
                <input
                  type="text"
                  placeholder="https://www.creativz.com/very-long-url"
                  className="bg-transparent flex-1 outline-none text-gray-300 pl-4"
                />

                <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 ml-2">
                  <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                      <Link
                        href={ctaHref}
                        className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr  to-transparent from-zinc-300/5 via-purple-400/20 text-landingpage-primary-foreground border-input border-[1px] hover:bg-gradient-to-tr hover:to-transparent hover:from-zinc-300/10 hover:via-purple-400/30 transition-all sm:w-auto py-2.5 px-2 md:py-3 md:px-5"
                      >
                        {!isMobile && ctaText}
                        <ChevronRight
                          className="ml-1 size-4 transition-transform
                       duration-300 ease-in-out group-hover:translate-x-0.5"
                        />
                      </Link>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Hero Tags Marquee*/}
          <BlurFade delay={0.25 * 5} inView>
            {/* <div className="flex">
            <ShinyPill shinyPillIcon="✨">Unlimited URLs</ShinyPill>
            <ShinyPill shinyPillIcon="✨">Url Tracking</ShinyPill>
            <ShinyPill shinyPillIcon="✨">Custom QR Code</ShinyPill>
            <ShinyPill shinyPillIcon="✨">Custom URLs</ShinyPill>
            <ShinyPill shinyPillIcon="✨">Unlimited Clicks</ShinyPill>
          </div> */}

            <HeroMarquee />
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
