import Link from 'next/link'
import Image from 'next/image';

const members = [
    {
        name: 'Liam Brown',
        role: 'Founder - CEO',
        avatar: 'https://alt.tailus.io/images/team/member-one.webp',
        link: '#',
    },
    {
        name: 'Elijah Jones',
        role: 'Co-Founder - CTO',
        avatar: 'https://alt.tailus.io/images/team/member-two.webp',
        link: '#',
    },
    {
        name: 'Isabella Garcia',
        role: 'Sales Manager',
        avatar: 'https://alt.tailus.io/images/team/member-three.webp',
        link: '#',
    },
    {
        name: 'Henry Lee',
        role: 'UX Engeneer',
        avatar: 'https://alt.tailus.io/images/team/member-four.webp',
        link: '#',
    },
    {
        name: 'Ava Williams',
        role: 'Interaction Designer',
        avatar: 'https://alt.tailus.io/images/team/member-five.webp',
        link: '#',
    },
    {
        name: 'Olivia Miller',
        role: 'Visual Designer',
        avatar: 'https://alt.tailus.io/images/team/member-six.webp',
        link: '#',
    },
]

export default function TeamSection() {
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
                <div key={index} className="overflow-hidden group">
                  <Image
                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                    src={member.avatar}
                    alt="team member"
                    width={826}
                    height={1239}
                  />
                  <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                    <div className="flex justify-between">
                      <h3 className="text-base font-medium transition-all duration-500 text-title group-hover:tracking-wider">
                        {member.name}
                      </h3>
                      <span className="text-xs">_0{index + 1}</span>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="inline-block text-sm transition duration-300 translate-y-6 opacity-0 text-muted-foreground group-hover:translate-y-0 group-hover:opacity-100">
                        {member.role}
                      </span>
                      <Link
                        href={member.link}
                        className="inline-block text-sm tracking-wide transition-all duration-500 translate-y-8 opacity-0 group-hover:text-primary-600 dark:group-hover:text-primary-400 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        {" "}
                        Linktree
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}
