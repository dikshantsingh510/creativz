import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Linkedin } from "lucide-react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconHeartFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { BlurFade } from "@/components/magicui/blur-fade";

function Footer() {
  return (
    <footer className="relative border-t border-landingpage-input bg-landingpage-background text-landingpage-foreground transition-colors duration-300 w-full">
      <div className=" mx-auto px-4 py-12 md:px-6 lg:px-8">
        <BlurFade delay={0.1} inView>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold tracking-tight">
                Creativz
              </h2>
              <p className="mb-6 text-landingpage-muted-foreground">
                We&apos;re passionate about making link sharing simple and
                powerful.
              </p>
              {/* <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form> */}
              <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <nav className="space-y-2 text-sm">
                <Link
                  href="/"
                  className="block transition-colors hover:text-landingpage-primary"
                >
                  Home
                </Link>
                <Link
                  href="/dashboard"
                  className="block transition-colors hover:text-landingpage-primary"
                >
                  Dashboard
                </Link>
                <Link
                  href="#features"
                  className="block transition-colors hover:text-landingpage-primary"
                >
                  Features & Services
                </Link>
                <Link
                  href="#faq"
                  className="block transition-colors hover:text-landingpage-primary"
                >
                  FAQ
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <address className="space-y-2 text-sm not-italic">
                <p>We&apos;d to hear from you!</p>
                <p>Drop us a line at:</p>

                <p>
                  Email:{" "}
                  <a
                    href="mailto:dikshantsingh510@gmail.com"
                    className="hover:text-primary"
                  >
                    dikshantsingh510@gmail.com
                  </a>
                </p>
              </address>
            </div>
            <div className="relative">
              <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
              <div className="mb-6 flex space-x-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border border-landingpage-input bg-landingpage-background hover:bg-landingpage-accent hover:text-landingpage-accent-foreground"
                      >
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconBrandGithub className="h-4 w-4" />
                          <span className="sr-only">Github</span>
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Github</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border border-landingpage-input bg-landingpage-background hover:bg-landingpage-accent hover:text-landingpage-accent-foreground"
                      >
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconBrandX className="h-4 w-4" />
                          <span className="sr-only">X (Twitter)</span>
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on X (Twitter)</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border border-landingpage-input bg-landingpage-background hover:bg-landingpage-accent hover:text-landingpage-accent-foreground"
                      >
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconBrandLinkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border border-landingpage-input bg-landingpage-background hover:bg-landingpage-accent hover:text-landingpage-accent-foreground"
                      >
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Connect with us on LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p className="flex justify-start items-center gap-x-1">
                Made with <IconHeartFilled className="h-4 w-4 text-rose-500" />{" "}
                by - Dikshant Singh
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={0.1 * 2} inView>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-landingpage-input pt-8 text-center md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2025 Creativz. All rights reserved.
            </p>
            <nav className="flex gap-4 text-sm">
              <a href="#" className="transition-colors hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                Terms of Service
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                Cookie Settings
              </a>
            </nav>
          </div>
        </BlurFade>
      </div>
    </footer>
  );
}

export { Footer };
