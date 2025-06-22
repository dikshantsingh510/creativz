import {  ShinyPill } from "@/components/magicui/animated-shiny-text";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const HeroMarquee = () => {
  return (
    <section className="bg-transparent pb-16 md:pb-32">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-base">Get Early access for free and get</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider gap={112}>
              <ShinyPill shinyPillIcon="✔️">Unlimited URLs</ShinyPill>
              <ShinyPill shinyPillIcon="✔️">Url Tracking</ShinyPill>
              <ShinyPill shinyPillIcon="✔️">Custom QR Code</ShinyPill>
              <ShinyPill shinyPillIcon="✔️">Custom URLs</ShinyPill>
              <ShinyPill shinyPillIcon="✔️">Unlimited Clicks</ShinyPill>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-transparent absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-transparent absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMarquee;
