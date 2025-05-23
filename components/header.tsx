"use client";
import Link from "next/link";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
// import { Button } from '@/components/ui/button'
import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Accueil", href: "/" },
  { name: "Nos spécialités", href: "/specialities" },
  { name: "À propos", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuState, setMenuState] = React.useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="shadow-lg">
      <nav
        data-state={menuState && "active"}
        className="bg-background/50 fixed w-full border-b backdrop-blur-3xl z-1000"
      >
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={`${
                          isActive(item.href)
                            ? "bg-gradient-to-br from-primary to-[#1a5fb4] text-transparent bg-clip-text dark:bg-gradient-to-br dark:from-primary dark:to-[#1a5fb4] dark:text-transparent dark:bg-clip-text"
                            : ""
                        } block font-bold hover:bg-gradient-to-br hover:from-primary hover:to-[#1a5fb4] hover:text-transparent hover:bg-clip-text dark:hover:from-primary dark:hover:to-[#1a5fb4] dark:hover:text-transparent dark:hover:bg-clip-text`}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={`${
                          isActive(item.href)
                            ? "bg-gradient-to-br from-primary to-[#1a5fb4] text-transparent bg-clip-text dark:bg-gradient-to-br dark:from-primary dark:to-[#1a5fb4] dark:text-transparent dark:bg-clip-text"
                            : ""
                        } block font-bold hover:bg-gradient-to-br hover:from-primary hover:to-[#1a5fb4] hover:text-transparent hover:bg-clip-text dark:hover:from-primary dark:hover:to-[#1a5fb4] dark:hover:text-transparent dark:hover:bg-clip-text`}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <ThemeToggle />
                {/* <Button
                                    asChild
                                    variant="outline"
                                    size="sm">
                                    <Link href="#">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm">
                                    <Link href="#">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
