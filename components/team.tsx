"use client"

import MemberCard from "./member-card";
import { useState, useEffect } from "react";

const members = [
  {
    avatar: "https://alt.tailus.io/images/team/member-one.webp",
    name: "Liam Brown",
    role: "Founder - CEO",
    link: "#",
  },
  {
    avatar: "https://alt.tailus.io/images/team/member-two.webp",
    name: "Elijah Jones",
    role: "Co-Founder - CTO",
    link: "#",
  },
  {
    avatar: "https://alt.tailus.io/images/team/member-three.webp",
    name: "Isabella Garcia",
    role: "Sales Manager",
    link: "#",
  },
  {
    avatar: "https://alt.tailus.io/images/team/member-four.webp",
    name: "Henry Lee",
    role: "UX Engeneer",
    link: "#",
  },
  {
    avatar: "https://alt.tailus.io/images/team/member-five.webp",
    name: "Ava Williams",
    role: "Interaction Designer",
    link: "#",
  },
  {
    avatar: "https://alt.tailus.io/images/team/member-six.webp",
    name: "Olivia Miller",
    role: "Visual Designer",
    link: "#",
  },
];

export default function TeamSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50 md:py-32 dark:bg-transparent">
      <div className="max-w-5xl px-6 mx-auto border-t">
        {/* <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-slate-900 rounded">Notre équipe</span> */}
        <div className="gap-4 mt-12 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-4/5">
            <h2 className="text-5xl font-bold bg-linear-to-br from-primary from-0 to-[#1a5fb4] to-50 text-transparent bg-clip-text">
              Notre équipe d&apos;experts
            </h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p>
              Vous serrez accompagnés par nos spécialistes tout au long du
              processus de guerrison.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <MemberCard
                key={member.name || index}
                index={index}
                name={member.name}
                avatar={member.avatar}
                role={member.role}
                link={member.link}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
