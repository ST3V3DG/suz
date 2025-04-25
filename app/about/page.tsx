import { AboutTimeline } from "@/components/about-timeline";
import FooterSection from "@/components/footer";
import HeroHeader from "@/components/hero8-header";

export default function AboutPage() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <AboutTimeline />
      </main>
      <FooterSection />
    </>
  );
}
