import SpecialityCard from "./speciality-card";

export default function SpecialitiesGrid() {
  const heading = "Des spécialités diverses et variées";
  const description =
    "Nous vous mettons entre les mains d'experts en tout genre.";

  const specialities = [
    {
      title: "Cardiologie",
      description:
        "Centre d'excellence en cardiologie offrant des soins complets pour le diagnostic et le traitement des maladies cardiaques. Technologies de pointe pour les interventions cardiaques complexes.",
      imageSrc:
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&h=400&fit=crop",
      imageAlt: "Équipement de cardiologie moderne",
      heigth: 400,
      width: 800,
    },
    {
      title: "Urologie",
      description:
        "Service spécialisé dans le traitement des pathologies urologiques et la transplantation rénale, utilisant des techniques robotiques et mini-invasives de dernière génération.",
      imageSrc:
        "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=400&h=400&fit=crop",
      imageAlt: "Bloc opératoire urologique",
      heigth: 400,
      width: 400,
    },
    {
      title: "Oncologie",
      description:
        "Département d'oncologie et chirurgie oncologique proposant des traitements personnalisés innovants. Expertise en immunothérapie et thérapies ciblées.",
      imageSrc:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=400&fit=crop",
      imageAlt: "Centre de traitement oncologique",
      heigth: 400,
      width: 400,
    },
    {
      title: "Chirurgie G.I.",
      description:
        "Service spécialisé dans la chirurgie gastro-intestinale, offrant des solutions innovantes pour les pathologies digestives complexes.",
      imageSrc:
        "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=400&fit=crop",
      imageAlt: "Équipement chirurgical G.I.",
      heigth: 400,
      width: 800,
    },
    {
      title: "Soins intensifs",
      description:
        "Unité de soins intensifs ultramoderne assurant une surveillance continue et des soins critiques avec les dernières technologies médicales.",
      imageSrc:
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=283&fit=crop",
      imageAlt: "Unité de soins intensifs",
      heigth: 283,
      width: 800,
    },
    {
      title: "Chirurgie vasculaire",
      description:
        "Centre d'excellence en chirurgie vasculaire utilisant des techniques mini-invasives pour le traitement des pathologies vasculaires.",
      imageSrc:
        "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&h=400&fit=crop",
      imageAlt: "Salle d'intervention vasculaire",
      heigth: 400,
      width: 800,
    },
    {
      title: "Endocrinologie",
      description:
        "Service spécialisé dans le traitement du diabète et des troubles endocriniens, offrant une prise en charge personnalisée.",
      imageSrc:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=600&fit=crop",
      imageAlt: "Consultation endocrinologie",
      heigth: 600,
      width: 800,
    },
    {
      title: "Chirurgie bariatrique",
      description:
        "Centre spécialisé dans le traitement chirurgical de l'obésité, proposant une approche multidisciplinaire complète.",
      imageSrc:
        "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=200&fit=crop",
      imageAlt: "Bloc opératoire bariatrique",
      heigth: 200,
      width: 800,
    },
    {
      title: "Ophtalmologie",
      description:
        "Service d'ophtalmologie équipé des dernières technologies pour le diagnostic et le traitement des pathologies oculaires.",
      imageSrc:
        "https://images.unsplash.com/photo-1724215618851-43f184cf0a66?w=400&h=300&fit=crop",
      imageAlt: "Cabinet d'ophtalmologie",
      heigth: 400,
      width: 800,
    },
    {
      title: "Chirurgie générale",
      description:
        "Excellence en chirurgie générale avec des équipes expérimentées utilisant les techniques les plus avancées pour tous types d'interventions.",
      imageSrc:
        "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&h=400&fit=crop",
      imageAlt: "Salle d'opération moderne",
      heigth: 400,
      width: 800,
    },
    {
      title: "Pédiatrie",
      description:
        "Service pédiatrique complet offrant des soins spécialisés pour les enfants dans un environnement adapté et rassurant.",
      imageSrc:
        "https://images.unsplash.com/photo-1659177443478-888263868238?w=400&h=200&fit=crop",
      imageAlt: "Service de pédiatrie",
      heigth: 200,
      width: 800,
    },
    {
      title: "ORL",
      description:
        "Service ORL spécialisé dans le diagnostic et le traitement des pathologies de l'oreille, du nez et de la gorge avec des équipements de pointe.",
      imageSrc:
        "https://images.unsplash.com/photo-1589279003513-467d320f47eb?w=400&h=200&fit=crop",
      imageAlt: "Cabinet ORL",
      heigth: 200,
      width: 400,
    },
  ];

  return (
    <section className="py-32 flex items-center justify-center">
      <div className="container flex flex-col gap-16 lg:px-16">
        <div className="lg:max-w-sm">
          <h2 className="mb-3 font-bold md:mb-4 text-5xl lg:mb-6 bg-linear-to-br from-primary from-0 to-[#1a5fb4] to-50 text-transparent bg-clip-text">
            {heading}
          </h2>
          <p className="mb-8 lg:text-lg text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-12">
          {specialities.map((speciality, index) => (
            <SpecialityCard
              key={index}
              className={getGridClass(index)}
              title={speciality.title}
              description={speciality.description}
              imageSrc={speciality.imageSrc}
              imageAlt={speciality.imageAlt}
              heigth={speciality.heigth}
              width={speciality.width}
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
