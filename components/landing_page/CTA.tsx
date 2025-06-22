import React from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShinyPill } from "@/components/magicui/animated-shiny-text";
import { ChevronRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative max-w-full mx-auto z-1 my-40 bg-[radial-gradient(50%_200px_at_50%_0%,theme(backgroundColor.white/6%),transparent)]">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />
      <div className="absolute right-1/2 translate-x-1/2 top-full w-96 h-40 rounded-full  bg-gradient-to-r from-purple-400/10 to-orange-200/10 blur-2xl" />

      <div className="max-w-screen-xl z-10 mx-auto px-6 p-20 gap-12 md:px-8 backdrop-blur-lg rounded-3xl border">
        <div className="space-y-8 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
          {/*  pill */}
          <BlurFade delay={0.1} inView>
            <ShinyPill>Why waiting</ShinyPill>
          </BlurFade>
          {/* Main Heading*/}
          <BlurFade delay={0.1 * 2} inView>
            <h2 className="text-4xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
              Got Questions? We&apos;ve Got Answers!
            </h2>
          </BlurFade>
          {/* paragraph */}
          <BlurFade delay={0.1 * 3} inView>
            <p className="max-w-2xl mx-auto text-landingpage-secondary-foreground/70 leading-tight">
              We&apos;ve got your back. Here, everything you need to know about
              our platform
            </p>
          </BlurFade>

          {/* CTA Button */}
          <BlurFade delay={0.1 * 4} inView>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 ml-2">
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                  <a
                    href="#"
                    className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr  to-transparent from-zinc-300/5 via-purple-400/20 text-landingpage-primary-foreground border-input border-[1px] hover:bg-gradient-to-tr hover:to-transparent hover:from-zinc-300/10 hover:via-purple-400/30 transition-all sm:w-auto py-4.5 px-9 "
                  >
                    Get Started
                    <ChevronRight
                      className="ml-1 size-4 transition-transform
                                 duration-300 ease-in-out group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </span>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default CTA;
