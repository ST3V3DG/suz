'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {  File, Home, IdCard, Languages } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from '@/components/magicui/border-beam'

export default function Features() {
    type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'
    const [activeItem, setActiveItem] = useState<ImageKey>('item-1')

    const images = {
      "item-1": {
        image: "/undraw_doctor.png",
        alt: "Obtention des documents",
      },
      "item-2": {
        image: "/undraw_doctors.png",
        alt: "Traduction",
      },
      "item-3": {
        image: "/undraw_medicine.png",
        alt: "Interprétation",
      },
      "item-4": {
        image: "/undraw_medical-care.png",
        alt: "Logement",
      },
    };

    return (
      <section className="py-12 md:py-20 lg:py-32">
        <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6 text-center">
            <h2 className="text-5xl font-semibold text-balance bg-linear-to-br from-primary from-0 to-[#1a5fb4] to-50 text-transparent bg-clip-text">
              Nos Services
            </h2>
            <p>Nous sommes avec vous jusqu'au bout.</p>
          </div>

          <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
            <Accordion
              type="single"
              value={activeItem}
              onValueChange={(value) => setActiveItem(value as ImageKey)}
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex items-center gap-2 text-base">
                    <File className="size-4" />
                    Obtention des documents
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Asperiores minus ipsa at, harum reprehenderit dignissimos hic
                  excepturi rem beatae quidem recusandae distinctio numquam eos
                  doloribus odio maxime dolores facilis repudiandae.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="flex items-center gap-2 text-base">
                    <Languages className="size-4" />
                    Traduction
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Mollitia nisi asperiores eius reiciendis odit veniam expedita
                  eveniet placeat sapiente, excepturi sed aut vero maxime
                  facilis rerum aspernatur nihil quis tempora!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className="flex items-center gap-2 text-base">
                    <IdCard className="size-4" />
                    Interprétation
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  non reiciendis minus, ipsa error unde dignissimos
                  voluptatibus, quidem quae eligendi incidunt alias excepturi
                  perspiciatis, repudiandae molestias dolore dolorum amet
                  numquam.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <div className="flex items-center gap-2 text-base">
                    <Home className="size-4" />
                    Logement
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  non reiciendis minus, ipsa error unde dignissimos
                  voluptatibus, quidem quae eligendi incidunt alias excepturi
                  perspiciatis, repudiandae molestias dolore dolorum amet
                  numquam.
                  <p className="mt-2 italic text-foreground/50">
                    Service gratuit pour la nourriture uniquement le week-end.
                    Hors hôpital, tout le reste du service est payant.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="relative flex p-2 overflow-hidden border bg-background rounded-3xl">
              <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
              <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeItem}-id`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden border shadow-md size-full rounded-2xl bg-zinc-900"
                  >
                    <Image
                      src={images[activeItem].image}
                      className="object-cover object-center size-full dark:mix-blend-lighten"
                      alt={images[activeItem].alt}
                      width={1207}
                      height={929}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <BorderBeam
                duration={6}
                size={200}
                className="from-transparent via-primary to-transparent dark:via-white/50"
              />
            </div>
          </div>
        </div>
      </section>
    );
}
