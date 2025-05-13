import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import LogoCloud from "./logo-cloud";
import { HeroH1 } from "./hero-h1";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <section className="flex flex-col items-center justify-between">
        <div className="pt-12 pb-24 md:pb-32 lg:pb-56 lg:pt-44">
          <div className="flex flex-col items-center justify-between max-w-6xl gap-6 px-6 mx-auto lg:flex-row">
            <div className="max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
              <HeroH1 />
              <p className="max-w-2xl mt-8 text-lg text-pretty text-black dark:text-muted-foreground">
                Nous vous aidons à retrouver l&apos;équilibre entre votre vie
                grâce à nos services innovants pour votre santé et votre
                bien-être.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 mt-12 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="relative w-46 h-12 -traslsate-y-2 before:absolute before:content-[''] before:-bottom-0 before:left-0 before:h-full before:w-full before:ring-2 before:ring-primary before:bg-transparent before:rounded-full hover:before:transform hover:before:translate-y-2 before:transition px-5 text-base border-2 rounded-full dark:text-white hover:-translate-y-2 border-primary"
                >
                  <Link href="https://wa.me/+237677791701" target="_blank">
                    <span className="text-nowrap">En savoir plus</span>
                    <ArrowRight />
                  </Link>
                </Button>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="ghost"
                  className="px-5 w-46 h-12 text-base rounded-full dark:hover:text-white dark:hover:bg-primary"
                >
                  <Link
                    href="https://wa.me/+237677791701"
                    target="_blank"
                    className="border-2 rounded-full border-primary text-primary hover:text-white hover:bg-primary"
                  >
                    <span className="text-nowrap">Nous contacter</span>
                  </Link>
                </Button>
              </div>
            </div>
            <Image
              width={500}
              height={500}
              src={"/undraw_medicine.png"}
              alt={"Doctors"}
              className="w-full rounded drop-shadow-2xl md:w-1/2 lg:w-1/2"
              priority={true}
            />
          </div>
        </div>
        {/* <Separator className="max-w-[800px]" /> */}
      </section>
      {/* <LogoCloud /> */}
    </>
  );
}
