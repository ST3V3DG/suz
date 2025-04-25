import FAQS from "@/components/faqs-3";
import Features from "@/components/features-12";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import HeroHeader from "@/components/hero8-header";
import StatsSection from "@/components/stats";
import TeamSection from "@/components/team";

export default function HomePage() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <HeroSection />
        <Features />
        <StatsSection />
        <TeamSection />
        <FAQS />
      </main>
      <FooterSection />
    </>
  );
}
