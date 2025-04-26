import SpecialityCard from "./speciality-card";

export default function SpecialitiesGrid() {
    const heading = "Des spécialités diverses et variées";
    const description = "Nous vous mettons entre les mains d'experts en tout genre.";
    
    const specialities = [
        {
            title: "Cardiologie",
            description: "Centre d'excellence en cardiologie offrant des soins complets pour le diagnostic et le traitement des maladies cardiaques, utilisant des technologies de pointe pour les interventions cardiaques.",
            imageSrc: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&h=400&fit=crop",
            imageAlt: "Équipement de cardiologie moderne"
        },
        {
            title: "Neurosciences",
            description: "Département de neurosciences intégrant expertise clinique et recherche de pointe pour le traitement des troubles neurologiques et neurodégénératifs.",
            imageSrc: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop",
            imageAlt: "Imagerie cérébrale et équipement neurologique"
        },
        {
            title: "Sciences rénales",
            description: "Centre spécialisé dans le traitement des maladies rénales et la transplantation, offrant des soins personnalisés et un suivi complet des patients.",
            imageSrc: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop",
            imageAlt: "Unité de dialyse et transplantation rénale"
        },
        {
            title: "Gastro-entérologie",
            description: "Excellence en gastro-entérologie et transplantation hépatique, combinant expertise chirurgicale et soins spécialisés pour les maladies digestives.",
            imageSrc: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&h=400&fit=crop",
            imageAlt: "Équipement d'endoscopie moderne"
        },
        {
            title: "Orthopédie",
            description: "Centre de référence en chirurgie orthopédique et remplacement articulaire, utilisant des techniques mini-invasives et des prothèses de dernière génération. Notre équipe pluridisciplinaire d\'experts se consacre à la restauration de votre mobilité et à l\'amélioration de votre qualité de vie. Nous proposons des solutions personnalisées pour chaque patient, combinant innovations technologiques et protocoles de rééducation accélérée. Nos chirurgiens spécialisés maîtrisent les approches chirurgicales les moins invasives, permettant une récupération plus rapide et des séjours hospitaliers réduits. Grâce à l\'utilisation d\'implants biocompatibles avancés et de systèmes de navigation assistés par ordinateur, nous assurons un positionnement optimal des prothèses et une longévité maximale des implants. Notre centre propose également un suivi personnalisé complet, du diagnostic initial jusqu'à la rééducation post-opératoire, pour garantir les meilleurs résultats fonctionnels possibles.",
            imageSrc: "https://images.unsplash.com/photo-1599045118108-bf9954418b76?w=800&h=800&fit=crop",
            imageAlt: "Salle d'opération orthopédique"
        },
        {
            title: "Soins pulmonaires",
            description: "Unité complète de soins pulmonaires, critiques et médecine du sommeil, offrant une prise en charge globale des troubles respiratoires.",
            imageSrc: "https://images.unsplash.com/photo-1616012480717-fd9867059ca0?w=800&h=400&fit=crop",
            imageAlt: "Laboratoire du sommeil et équipement respiratoire"
        }
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
                <div className="grid gap-4 md:grid-cols-4 grid-rows-3">
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
        "lg:col-span-2 max-h-96",
        "[&>div]:h-full max-h-96",
        "[&>div]:h-full max-h-96",
        "lg:col-span-2",
        "lg:col-span-2 lg:row-span-2 [&>div]:h-full",
        "lg:col-span-2 max-h-96"
    ];
    return gridClasses[index] || "";
}