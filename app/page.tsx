import CTA from "@/components/landing_page/CTA";
import FAQ from "@/components/landing_page/FAQ";
import Features from "@/components/landing_page/Features";
import { Footer } from "@/components/landing_page/Footer";
import { Header } from "@/components/landing_page/Header";
import HeroSection from "@/components/landing_page/HeroSection";


export default function Home() {
  return (
    <div className="relative w-full h-fit bg-landingpage-background overflow-x-hidden">
      <div className="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 dark:bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="relative flex flex-col items-center bg-transparent  max-w-7xl min-h-dvh mx-auto ">
        <Header />
        <HeroSection />
        <Features/>
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
