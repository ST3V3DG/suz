import Footer from "@/components/footer";
import Header from "@/components/header";
import SpecialitiesGrid from "@/components/specialities-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos spécialités",
  description:
    "Centre médical international proposant des soins spécialisés : chirurgie bariatrique, urologie, oncologie, transplantation rénale, chirurgie générale et esthétique. Notre équipe d'experts offre des traitements de pointe en cardiologie, endocrinologie et orthopédie à des tarifs accessibles.",
};
export default function SpecialitiesPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <SpecialitiesGrid />
      </main>
      <Footer />
    </>
  );
}
