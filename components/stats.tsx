export default function StatsSection() {
    return (
      <section className="py-12 md:py-20 bg-primary/30">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
            <h2 className="text-5xl font-medium">
              Nous vous disons un grand{" "}
              <span className="bg-linear-to-br from-primary from-0 to-[#1a5fb4] to-50 text-transparent bg-clip-text font-bold">
                Merci
              </span>.
            </h2>
            <p>Vous êtes nombreux à nous faire confiance.</p>
          </div>

          <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
            <div className="space-y-4">
              <div className="text-5xl font-bold">+1200</div>
              <p>Suivis</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold">22 K</div>
              <p>Traitements</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold">+500</div>
              <p>Accompagnateurs</p>
            </div>
          </div>
        </div>
      </section>
    );
}
