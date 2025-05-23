'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQS() {
    const faqItems: FAQItem[] = [
      {
        id: "item-1",
        icon: "clock",
        question: "Quelles sont vos heures d'ouverture ?",
        answer:
          "Nos locaux vous sont ouverts du Lundi au Vendredi de 9h à 18h, et le weekend de 10 à 16h. Les jours fériers, les heures varies et seront disponible sur notre site internet.",
      },
      {
        id: "item-2",
        icon: "locate",
        question: "Où êtes-vous situé ?",
        answer: "Vous nous trouverez [description de la localisation].",
      },
      {
        id: "item-3",
        icon: "file",
        question: "Quels document dois-je fournir ?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat impedit veritatis doloremque ut perspiciatis nisi ab provident, quam commodi nostrum dolor rem, deleniti molestias consequuntur est eos cumque. Pariatur, rerum!",
      },
      {
        id: "item-4",
        icon: "globe",
        question: "Les soins ne se font que en Inde ?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat impedit veritatis doloremque ut perspiciatis nisi ab provident, quam commodi nostrum dolor rem, deleniti molestias consequuntur est eos cumque. Pariatur, rerum!",
      },
    ];

    return (
      <section className="bg-primary/30 py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="flex flex-col gap-10 md:flex-row md:gap-16">
            <div className="md:w-1/3">
              <div className="sticky top-20">
                <h2 className="mt-4 text-5xl font-bold capitalize bg-linear-to-br from-primary from-0 to-[#1a5fb4] to-50 text-transparent bg-clip-text">
                  Questions Fréquentes
                </h2>
                <p className="text-muted-foreground mt-4">
                  Vous avez d&apos;autres questions ?{" "}
                  <Link
                    href="https://wa.me/+237677791701"
                    target="_blank"
                    className="text-primary font-medium hover:underline"
                  >
                    Contactez-nous
                  </Link>
                </p>
              </div>
            </div>
            <div className="md:w-2/3">
              <Accordion type="single" collapsible className="w-full space-y-2">
                {faqItems.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                  >
                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="flex size-6">
                          <DynamicIcon
                            name={item.icon}
                            className="m-auto size-4"
                          />
                        </div>
                        <span className="text-base">{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5">
                      <div className="px-9">
                        <p className="text-base">{item.answer}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    );
}
