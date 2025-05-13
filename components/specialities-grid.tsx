import SpecialityCard from "./speciality-card";

export default function SpecialitiesGrid() {
    const heading = "Des spécialités diverses et variées";
    const description = "Nous vous mettons entre les mains d'experts en tout genre.";
    
    const specialities = [
      {
        title: "Cardiologie",
        description:
          "Centre d'excellence en cardiologie offrant des soins complets pour le diagnostic et le traitement des maladies cardiaques. Technologies de pointe pour les interventions cardiaques complexes.",
        imageSrc: "/cardiologie.jpeg",
        imageAlt: "Équipement de cardiologie moderne",
        priority: true,
      },
      {
        title: "Urologie",
        description:
          "Service spécialisé dans le traitement des pathologies urologiques et la transplantation rénale, utilisant des techniques robotiques et mini-invasives de dernière génération.",
        imageSrc: "/urologie.jpeg",
        imageAlt: "Bloc opératoire urologique",
        priority: false,
      },
      {
        title: "Oncologie",
        description:
          "Département d'oncologie et chirurgie oncologique proposant des traitements personnalisés innovants. Expertise en immunothérapie et thérapies ciblées.",
        imageSrc: "/oncologie.jpeg",
        imageAlt: "Centre de traitement oncologique",
        priority: false,
      },
      {
        title: "Chirurgie G.I.",
        description:
          "Service spécialisé dans la chirurgie gastro-intestinale, offrant des solutions innovantes pour les pathologies digestives complexes.",
        imageSrc: "/chirurgie G.I.jpeg",
        imageAlt: "Équipement chirurgical G.I.",
        priority: false,
      },
      {
        title: "Soins intensifs",
        description:
          "Unité de soins intensifs ultramoderne assurant une surveillance continue et des soins critiques avec les dernières technologies médicales.",
        imageSrc: "/soins intensifs.jpeg",
        imageAlt: "Unité de soins intensifs",
        priority: false,
      },
      {
        title: "Chirurgie vasculaire",
        description:
          "Centre d'excellence en chirurgie vasculaire utilisant des techniques mini-invasives pour le traitement des pathologies vasculaires.",
        imageSrc: "/chirurgie vasculaire.jpeg",
        imageAlt: "Salle d'intervention vasculaire",
        priority: false,
      },
      {
        title: "Endocrinologie",
        description:
          "Service spécialisé dans le traitement du diabète et des troubles endocriniens, offrant une prise en charge personnalisée.",
        imageSrc: "/endocrinologie.jpeg",
        imageAlt: "Consultation endocrinologie",
        priority: false,
      },
      {
        title: "Chirurgie bariatrique",
        description:
          "Centre spécialisé dans le traitement chirurgical de l'obésité, proposant une approche multidisciplinaire complète.",
        imageSrc: "/chirurgie bariatrique.jpeg",
        imageAlt: "Bloc opératoire bariatrique",
        priority: false,
      },
      {
        title: "Ophtalmologie",
        description:
          "Service d'ophtalmologie équipé des dernières technologies pour le diagnostic et le traitement des pathologies oculaires.",
        imageSrc: "/ophtalmologie.jpeg",
        imageAlt: "Cabinet d'ophtalmologie",
        priority: false,
      },
      {
        title: "Chirurgie générale",
        description:
          "Excellence en chirurgie générale avec des équipes expérimentées utilisant les techniques les plus avancées pour tous types d'interventions.",
        imageSrc: "/chirurgie générale.jpeg",
        imageAlt: "Salle d'opération moderne",
        priority: false,
      },
      {
        title: "Pédiatrie",
        description:
          "Service pédiatrique complet offrant des soins spécialisés pour les enfants dans un environnement adapté et rassurant.",
        imageSrc: "/pédiatrie.jpeg",
        imageAlt: "Service de pédiatrie",
        priority: false,
      },
      {
        title: "ORL",
        description:
          "Service ORL spécialisé dans le diagnostic et le traitement des pathologies de l'oreille, du nez et de la gorge avec des équipements de pointe.",
        imageSrc: "/orl.jpeg",
        imageAlt: "Cabinet ORL",
        priority: false,
      },
    ];

    return (
        <section className="py-32 flex items-center justify-center">
            <div className="container flex flex-col gap-16 lg:px-16">
                <div className="lg:max-w-sm">
                    <h2 className="mb-3 font-bold md:mb-4 text-5xl lg:mb-6 bg-linear-to-br from-primary from-0 to-[#1a5fb4] to-50 text-transparent bg-clip-text">
                        {heading}
                    </h2>
                    <p className="mb-8 lg:text-lg text-muted-foreground">
                        {description}
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-12">
                    {specialities.map((specialty, index) => (
                        <SpecialityCard
                            key={index}
                            className={getGridClass(index)}
                            title={specialty.title}
                            description={specialty.description}
                            imageSrc={specialty.imageSrc}
                            imageAlt={specialty.imageAlt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function getGridClass(index: number): string {
  const gridClasses = [
    "lg:col-span-6 max-h-96", // Cardiologie
    "[&>div]:h-full lg:col-span-3 max-h-96", // Urologie
    "[&>div]:h-full lg:col-span-3 max-h-96", // Oncologie
    "lg:col-span-5 max-h-96", // Chirurgie générale
    "lg:col-span-7 max-h-96", // Chirurgie G.I.
    "lg:col-span-3 [&>div]:h-full max-h-96", // Chirurgie vasculaire
    "lg:col-span-3 [&>div]:h-full max-h-96", // Endocrinologie
    "lg:col-span-3 [&>div]:h-full", // Chirurgie bariatrique
    "lg:col-span-3 max-h-96", // Ophtalmologie
    "lg:col-span-4 max-h-96", // Soins intensifs
    "lg:col-span-4 max-h-96", // Pédiatrie
    "lg:col-span-4 max-h-96", // ORL
  ];
  return gridClasses[index] || "";
}