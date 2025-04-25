import FooterSection from "@/components/footer";
import HeroHeader from "@/components/hero8-header";
import SpecialitiesGrid from "@/components/specialities-grid";

export default function SpecialitiesPage() {
  return (
    <>
      <HeroHeader />
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
      <FooterSection />
    </>
  );
}
