import { ComponentPropsWithoutRef, CSSProperties, FC } from "react";
import { cn } from "@/lib/utils";
import React from "react";

export interface AnimatedShinyTextProps
  extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",

        // Shine effect
        "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shine gradient
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",

        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};


export function ShinyPill({
  children,
  shinyPillIcon,
}: {
  children: React.ReactNode;
  shinyPillIcon?: React.ReactNode;
}) {
  return (
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900/30 dark:hover:bg-neutral-800/30 backdrop-blur-sm z-10 h-fit w-fit mx-auto "
        )}
      >
        <AnimatedShinyText className="inline-flex items-center font-medium justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 ">
          <span>{shinyPillIcon && shinyPillIcon} {children}</span>
          {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
        </AnimatedShinyText>
      </div>
   
  );
}