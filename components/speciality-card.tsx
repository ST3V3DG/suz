import { Tilt } from '@/components/motion-primitives/tilt';
import Image from 'next/image';

export default function SpecialtityCard({ className, title, description, imageSrc, imageAlt }: { className?: string, title: string, description: string, imageSrc: string, imageAlt: string }) {
  return (
    <Tilt className={className} rotationFactor={8} isRevese>
      <div className="relative grid w-full grid-rows-2 overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 rounded-lg shadow">
        <Image
          src={ imageSrc }
          alt={imageAlt}
          width={500}
          height={500}
          priority
          className="row-span-2 object-cover w-full h-full"
        />
        <h2 className="font-mono leading-snug text-black p-2 text-sm md:text-lg lg:text-xl dark:text-white">
          { title }
        </h2>
        <div className="absolute inset-0 flex flex-col items-start justify-end opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div className="w-full rounded-md bg-zinc-950/80 p-4 backdrop-blur-sm h-full">
            <p className="font-mono leading-snug text-zinc-50 text-2xl mt-10">
              { title }
            </p>
            <p className="text-zinc-400 mt-20">
              { description }
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-10 hidden p-2 opacity-0 transition-opacity duration-300 hover:block hover:opacity-100">
          <div className="w-full rounded-md bg-zinc-950/80 p-2 backdrop-blur-sm"></div>
        </div>
      </div>
    </Tilt>
  );
}
