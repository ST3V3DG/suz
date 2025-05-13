"use client"

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface MemberCardProps {
  index: number;
  name: string;
  avatar: string;
  role: string;
  link: string;
  isMobile: boolean;
}

export default function MemberCard({
  index,
  name,
  avatar,
  role,
  link,
  isMobile,
}: MemberCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, {
    amount: 0.8,
    // once: true,
  });

  const imageBaseClasses =
    "h-96 w-full rounded-xl object-cover object-top transition-all duration-500 group-hover:h-[22.5rem]";
  const imageDesktopClasses =
    "h-96 w-full rounded-md object-cover object-top transition-all duration-500 group-hover:h-[22.5rem] group-hover:rounded-xl grayscale hover:grayscale-0";
  const imageMobileVisibleClasses = "grayscale-0";
  const imageMobileHiddenClasses = "grayscale";

  const imageClasses = `${imageBaseClasses} ${
    isMobile
      ? inView
        ? imageMobileVisibleClasses
        : imageMobileHiddenClasses
      : imageDesktopClasses
  }`;

  const roleBaseClasses =
    "inline-block text-sm transition duration-300 text-muted-foreground";
  const roleDesktopClasses =
    "translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100";
  const roleMobileVisibleClasses = "translate-y-0 opacity-100";
  const roleMobileHiddenClasses = "translate-y-6 opacity-0";

  const roleClasses = `${roleBaseClasses} ${
    isMobile
      ? inView
        ? roleMobileVisibleClasses
        : roleMobileHiddenClasses
      : roleDesktopClasses
  }`;

  const linkBaseClasses =
    "inline-block text-sm tracking-wide transition-all duration-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 hover:underline";
  const linkDesktopClasses =
    "translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100";
  const linkMobileVisibleClasses = "translate-y-0 opacity-100";
  const linkMobileHiddenClasses = "translate-y-8 opacity-0";

  const linkClasses = `${linkBaseClasses} ${
    isMobile
      ? inView
        ? linkMobileVisibleClasses
        : linkMobileHiddenClasses
      : linkDesktopClasses
  }`;

  return (
    <div ref={cardRef} className="overflow-hidden group">
      <Image
        className={imageClasses}
        src={avatar}
        alt={`Photo of ${name}`}
        width={826}
        height={1239}
        priority={index < 3}
      />
      <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
        <div className="flex justify-between">
          <h3 className="text-base font-medium transition-all duration-500 text-title group-hover:tracking-wider">
            {name}
          </h3>
          <span className="text-xs">_0{index + 1}</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className={roleClasses}>{role}</span>
          <Link href={link} className={linkClasses}>
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
