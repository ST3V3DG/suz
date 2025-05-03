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
        {/* <div className="mx-auto max-w-5xl px-6 pt-20 pb-12">
          <h1 className="text-4xl font-bold text-center">Nos Spécialités</h1>
          <p className="mt-4 text-center text-lg text-muted-foreground">
            Découvrez nos spécialités qui vous aideront à améliorer votre santé
            mentale et physique.
          </p>
        </div> */}
        {/* 
        <div className="mx-auto max-w-5xl px-6"> */}
        <SpecialitiesGrid />
        {/* </div> */}
      </main>
      <Footer />
    </>
  );
}
