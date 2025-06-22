"use client";

import * as React from "react";
import { PlusIcon } from "lucide-react";
import { BlurFade } from "../magicui/blur-fade";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { ShinyPill } from "../magicui/animated-shiny-text";

const FAQs = [
  {
    id: "1",
    title: "Is it really free to use?",
    content:
      "Yes, 100% free! Just register to create unlimited short URLs, customize links, and track clicks. No credit card needed.",
  },
  {
    id: "2",
    title: "Do I need to sign up to shorten URLs?",
    content:
      "Yup, a quick registration unlocks all features. It's super fast and lets you manage your links securely.",
  },
  {
    id: "3",
    title: "Can I create custom short URLs?",
    content:
      "Absolutely! Choose your own short code (e.g., yourbrand.link/mycustom) for a personal touch.",
  },
  {
    id: "4",
    title: "How do I track link performance?",
    content:
      "After signing up, your dashboard shows real-time click analytics for every link you create.",
  },
  {
    id: "5",
    title: "Is my data safe?",
    content:
      "We use secure authentication and rate limiting to keep your links and account protected.",
  },
];

const FAQ = () => {
  return (
    <section className="relative max-w-full mx-auto z-1 bg-transparent " id="faq">
      <div className="absolute right-1/2 translate-x-1/2 top-0 w-96 h-40 rounded-full  bg-gradient-to-r from-purple-400/10 to-orange-200/10 blur-2xl" />
      <div className=" max-w-screen-xl z-10 mx-auto px-4 pt-28 pb-10 gap-12  md:px-8">
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

          {/* FAQ Items */}
          <BlurFade delay={0.1 * 4} inView>
            <div className="max-w-2xl mx-auto space-y-4 ">
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-4"
                defaultValue="2"
              >
                {FAQs.map((item) => (
                  <AccordionItem
                    value={item.id}
                    key={item.id}
                    className="bg-landingpage-background/10  has-focus-visible:border-ring has-focus-visible:ring-ring/50 rounded-lg  border px-4 py-3 outline-none last:border-b has-focus-visible:ring-[3px] hover:bg-landingpage-muted/40 backdrop-blur-sm "
                  >
                    <AccordionPrimitive.Header className="flex">
                      <AccordionPrimitive.Trigger className="ocus-visible:ring-0 flex flex-1 items-center justify-between rounded-md py-2 text-left text-lg leading-6 font-medium transition-all outline-none [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                        {item.title}
                        <PlusIcon
                          size={16}
                          className="pointer-events-none shrink-0 opacity-70 transition-transform duration-200"
                          aria-hidden="true"
                        />
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionContent className="text-landingpage-muted-foreground py-2 text-left ">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
