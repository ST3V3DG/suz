import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
// import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import LogoCloud from "./logo-cloud";
// import Spline from "@splinetool/react-spline/next";

export default function HeroSection() {
  return (
    <>
        <section>
          <div className="pt-12 pb-24 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative flex flex-col items-center justify-between max-w-6xl gap-6 px-6 mx-auto md:flex-row">
              <div className="max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="max-w-2xl mt-8 text-5xl font-medium text-balance md:text-6xl lg:mt-16 xl:text-7xl">
                  Ship 10x Faster with NS
                </h1>
                <p className="max-w-2xl mt-8 text-lg text-pretty">
                  Highly customizable components for building modern websites
                  and applications that look and feel the way you mean it.
                </p>

                <div className="flex flex-col items-center justify-center gap-2 mt-12 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="#link">
                      <span className="text-nowrap">Start Building</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-5 text-base"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Request a demo</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                width={400}
                height={200}
                src={"/undraw_medicine.png"}
                alt={"Doctors"}
                className="w-full rounded drop-shadow-2xl md:w-1/2 lg:w-1/2"
              />
            </div>
          </div>
        </section>
        <LogoCloud />
    </>
  );
}
