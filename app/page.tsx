import FAQS from "@/components/faqs";
import FeaturesSection from "@/components/features";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import Header from "@/components/header";
import StatsSection from "@/components/stats";
import TeamSection from "@/components/team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Centre médical d'excellence proposant des traitements médicaux abordables et des interventions chirurgicales de qualité pour les patients internationaux. Notre agence de tourisme médical vous accompagne dans votre parcours de soins avec des forfaits personnalisés, combinant expertise médicale de pointe et services haut de gamme.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <TeamSection />
        <FAQS />
      </main>
      <Footer />
    </>
  );
}
