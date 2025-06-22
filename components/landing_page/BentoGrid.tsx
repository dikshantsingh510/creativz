"use client";

import { motion } from "framer-motion";
import { LockKeyholeIcon } from "lucide-react";
import { Ripple } from "@/components/magicui/ripple";

import { Marquee } from "@/components/magicui/marquee";
import { ShinyPill } from "@/components/magicui/animated-shiny-text";
import Image from "next/image";

export default function BentoGridCards() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Bento grid Cards  Starts*/}

        {/* Personalize your Links - col-span-2 */}
        <motion.div
          className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 md:col-span-2 min-h-[280px] flex flex-wrap justify-between"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute -left-4 top-0 size-40 rounded-full bg-primary/10 blur-2xl" />
          <div className="">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Personalize your Links
            </h3>
            <p className="text-base text-landingpage-muted-foreground mb-8 max-w-56 ">
              Craft short URLs like creativz.com/r/mycustom to match your brand
              or vibe.
            </p>
          </div>

          <div className=" lg:max-w-[60%] relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover reverse>
              <ShinyPill shinyPillIcon="✨">marketing-link</ShinyPill>
              <ShinyPill shinyPillIcon="✨">social-media</ShinyPill>
              <ShinyPill shinyPillIcon="✨">youtube-video</ShinyPill>
              <ShinyPill shinyPillIcon="✨">amazon-product</ShinyPill>
              <ShinyPill shinyPillIcon="✨">cat</ShinyPill>
            </Marquee>
            <Marquee pauseOnHover>
              <ShinyPill shinyPillIcon="✨">marketing-link</ShinyPill>
              <ShinyPill shinyPillIcon="✨">social-media</ShinyPill>
              <ShinyPill shinyPillIcon="✨">youtube-video</ShinyPill>
              <ShinyPill shinyPillIcon="✨">amazon-product</ShinyPill>
              <ShinyPill shinyPillIcon="✨">cat</ShinyPill>
            </Marquee>
            <Marquee pauseOnHover reverse>
              <ShinyPill shinyPillIcon="✨">marketing-link</ShinyPill>
              <ShinyPill shinyPillIcon="✨">social-media</ShinyPill>
              <ShinyPill shinyPillIcon="✨">youtube-video</ShinyPill>
              <ShinyPill shinyPillIcon="✨">amazon-product</ShinyPill>
              <ShinyPill shinyPillIcon="✨">cat</ShinyPill>
            </Marquee>
            <Marquee pauseOnHover>
              <ShinyPill shinyPillIcon="✨">marketing-link</ShinyPill>
              <ShinyPill shinyPillIcon="✨">social-media</ShinyPill>
              <ShinyPill shinyPillIcon="✨">youtube-video</ShinyPill>
              <ShinyPill shinyPillIcon="✨">amazon-product</ShinyPill>
              <ShinyPill shinyPillIcon="✨">cat</ShinyPill>
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#070709]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#070709]" />
          </div>
        </motion.div>

        {/* Fast & Secure - col-span-1 */}
        <motion.div
          className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 md:col-span-1 min-h-[280px] flex flex-col justify-between relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-landingpage-foreground mb-2 text-center">
            Fast & Secure
          </h3>
          <div className="absolute -right-4 top-0 size-32 rounded-full bg-primary/20 blur-3xl" />
          <Ripple mainCircleSize={60} className="" />

          <div className="absolute top-1/2 left-1/2 -translate-1/2 size-16 bg-gradient-to-b from-[#222222] to-[#000000] rounded-2xl flex items-center justify-center">
            <LockKeyholeIcon className="w-6 h-6 text-white" />
          </div>
        </motion.div>

        {/* Share with QR Codes - col-span-1 */}
        <motion.div
          className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 md:col-span-1 min-h-[280px] flex flex-col "
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="mb-2">
            <h3 className="text-xl md:text-2xl font-semibold text-landingpage-foreground mb-2 text-center">
              Share with QR Codes
            </h3>
          </div>
          <div className="absolute -right-4 bottom-0 size-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="bg-transparent backdrop-blur-sm rounded-2xl p-4 border border-white/10 size-fit mx-auto">
            <Image alt="qrcode" width={180} height={180} src="/qr.jpeg" className="rounded-xl" />
          </div>
        </motion.div>

        {/* Track Every Click - col-span-2 */}
        <motion.div
          className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 md:col-span-2 min-h-[280px] flex flex-wrap justify-between"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Track Every Click
            </h3>
            <p className="text-base text-landingpage-muted-foreground mb-8 max-w-56 ">
              Get real-time insights on who&apos;s clicking your links with our
              analytics dashboard.
            </p>
          </div>
          <div className="absolute -right-4 bottom-0 size-40 rounded-full bg-primary/20 blur-3xl" />

          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10 w-full lg:w-96 flex flex-col justify-center">
            <div className="flex flex-col items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-white">89.34%</span>
              <p className="text-green-400 text-sm mb-4">+6% in last 30 days</p>
            </div>

            <div className="h-28 flex items-end gap-1.5 ">
              {[40, 60, 45, 80, 65, 90, 75, 85].map((height, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-t from-purple-400/80 to-landingpage-primary/80 rounded-sm flex-1"
                  style={{ height: `${height}%` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bento Grid Cards end */}
      </div>
    </div>
  );
}
