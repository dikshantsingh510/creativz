import React from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShinyPill } from "@/components/magicui/animated-shiny-text";
import BentoGridCards from "@/components/landing_page/BentoGrid";

const Features = () => {
  return (
    <section className="relative w-full mx-auto z-1 my-20 " id="features">
      <div className="max-w-screen-xl z-10 mx-auto px-6 p-20 gap-12 md:px-8 backdrop-blur-lg rounded-3xl space-y-16 ">
        <div className="space-y-8 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
          {/*  pill */}
          <BlurFade delay={0.1} inView>
            <ShinyPill>Features</ShinyPill>
          </BlurFade>
          {/* Main Heading*/}
          <BlurFade delay={0.1 * 2} inView>
            <h2 className="text-4xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
              Why Creativz Rocks?
            </h2>
          </BlurFade>
          {/* paragraph */}
          <BlurFade delay={0.1 * 3} inView>
            <p className="max-w-2xl mx-auto text-landingpage-secondary-foreground/70 leading-tight">
              Discover powerful tools to shorten, customize, and track your
              links for free. Sign up to unlock custom URLs, QR codes,
              analytics, and more.
            </p>
          </BlurFade>
        </div>
        {/* Bento grid cards */}
        <BlurFade delay={0.1 * 4} inView>
          <BentoGridCards />
        </BlurFade>
      </div>
    </section>
  );
};

export default Features;
