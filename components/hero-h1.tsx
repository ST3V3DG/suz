import { TextLoop } from '@/components/motion-primitives/text-loop';

export function HeroH1() {
  return (
    <h1 className="max-w-2xl mt-8 text-5xl font-bold text-balance md:text-6xl lg:mt-16 xl:text-7xl bg-linear-to-br from-primary from-0 to-[#1a5fb4] to-50 text-transparent bg-clip-text">
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
        <span>Equilibre</span>
        <span>Bien-être</span>
        <span>Santé</span>
      </TextLoop>
    </h1>
  );
}
