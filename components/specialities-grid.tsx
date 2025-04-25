import SpecialityCard from "./speciality-card";

// interface Feature {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
// }

// interface Feature72Props {
//   heading?: string;
//   description?: string;
//   linkUrl?: string;
//   linkText?: string;
//   features?: Feature[];
// }

export default function SpecialitiesGrid() {
    const heading = "Des spécialités diverses et variées";
    const description =
      "Nous vous mettons entre les mains d'experts en tout genre.";
  return (
    <section className="py-32 flex items-center justify-center">
      <div className="container flex flex-col gap-16 lg:px-16">
        <div className="lg:max-w-sm">
          <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {heading}
          </h2>
          <p className="mb-8 lg:text-lg bg-linear-to-br from-primary from-0 to-[#1a5fb4] to-50 text-transparent bg-clip-text">{description}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-4 grid-rows-3">
          <SpecialityCard className="lg:col-span-2 max-h-96" />
          <SpecialityCard className="[&>div]:h-full max-h-96"/>
          <SpecialityCard className="[&>div]:h-full max-h-96"/>
          <SpecialityCard className="lg:col-span-2" />
          <SpecialityCard className="lg:col-span-2 lg:row-span-2 [&>div]:h-full" />
          <SpecialityCard className="lg:col-span-2 max-h-96" />
        </div>
      </div>
    </section>
  );
};
