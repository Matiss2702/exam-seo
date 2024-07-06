"use client";

import { navbarLinks } from "@/constants/data";
import { cn } from "@/utils/cn";
import { LucideMenu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {/* <!-- Menu de navigation --> */}
      <header className="fixed left-0 right-0 top-0 z-50 w-full bg-white/65 py-3 text-sm backdrop-blur-lg max-lg:px-0">
        {/* <!-- Navbar Tablette / Pc  --> */}
        <nav className="container">
          <ul className="flex items-center gap-x-8 font-pally text-base max-lg:hidden">
            {navbarLinks.map(({ href, label, isLogo }) => (
              <li key={href} className="flex flex-1 justify-center">
                {isLogo ? (
                  <Link
                    className="transition-transform duration-300 hover:scale-105"
                    href={href}
                  >
                    <Image
                      width="48"
                      height="48"
                      src="/icons/logo.svg"
                      alt="Logo Terrain Confus"
                    />
                  </Link>
                ) : (
                  <Link
                    className={cn(
                      pathname === href
                        ? "border-b-2 border-primary-500"
                        : "transition-colors duration-200 hover:text-primary-500",
                    )}
                    href={href}
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* <!-- Navbar Mobile --> */}
        <div className="container flex items-center justify-between lg:hidden">
          <Link
            className="transition-transform duration-300 hover:scale-105"
            href="/"
          >
            <Image
              width="36"
              height="36"
              src="/icons/logo.svg"
              alt="Logo Terrain Confus"
            />
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="flex justify-center transition-colors duration-200 hover:text-primary-400"
          >
            <LucideMenu size="24" />
          </button>
        </div>
        {/* <!-- Menu Navbar Mobile --> */}
        <nav className={cn(!isNavOpen && "hidden")}>
          <ul className="z-[9999] flex flex-col items-center gap-y-8 font-pally text-base">
            {navbarLinks.map(
              ({ href, label, isLogo }) =>
                !isLogo && (
                  <li key={href} className="hover:text-primary-500">
                    <Link
                      onClick={() => setIsNavOpen(false)}
                      className={cn(
                        pathname === href
                          ? "border-b-2 border-primary-500"
                          : "transition-colors duration-200 hover:text-primary-500",
                      )}
                      href={href}
                    >
                      {label}
                    </Link>
                  </li>
                ),
            )}
          </ul>
        </nav>
      </header>
      {/* <!-- Div qui doit faire la taille des différentes navbar !!! --> */}
      <div className="h-[70.8px] lg:h-[86.39px]" />
    </>
  );
}
