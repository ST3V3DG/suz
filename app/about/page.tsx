import { AboutTimeline } from "@/components/about-timeline";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos de nous",
  description:
    "Découvrez notre expertise en tourisme médical avec une équipe de spécialistes dévoués. Nous facilitons l'accès à des soins médicaux de qualité en combinant accompagnement personnalisé et standards internationaux.",
};
export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <AboutTimeline />
      </main>
      <Footer />
    </>
  );
}
