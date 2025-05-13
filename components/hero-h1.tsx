import { TextLoop } from '@/components/motion-primitives/text-loop';
import { Activity, Heart, ShieldPlus } from 'lucide-react';

export function HeroH1() {
  return (
    <h1 className="max-w-2xl mt-8 text-5xl font-bold text-center lg:text-start md:text-6xl lg:mt-16 xl:text-7xl bg-linear-to-br from-primary from-0 to-[#1a5fb4] to-50 text-transparent bg-clip-text flex flex-col items-center lg:items-start">
      Nous vous aidons à retrouver{" "}
      <TextLoop
        className="overflow-y-clip"
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 80,
          mass: 10,
        }}
        variants={{
          initial: {
            y: 20,
            rotateX: 90,
            opacity: 0,
            filter: "blur(4px)",
          },
          animate: {
            y: 0,
            rotateX: 0,
            opacity: 1,
            filter: "blur(0px)",
          },
          exit: {
            y: -20,
            rotateX: -90,
            opacity: 0,
            filter: "blur(4px)",
          },
        }}
      >
        <span className="flex items-center justify-center gap-1.5">
          <span>Equilibre</span>
          <Activity className="size-12 inline font-bold text-blue-500" />
        </span>
        <span className="flex items-center justify-center gap-1.5">
          <span>Bien-être</span>
          <ShieldPlus className="size-12 inline font-bold text-green-500" />
        </span>
        <span className="flex items-center justify-center gap-1.5">
          <span>Santé</span>
          <Heart className="size-12 inline font-bold text-red-600 fill-red-600" />
        </span>
      </TextLoop>
    </h1>
  );
}
