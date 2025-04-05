"use client";

import Image from "next/image";
import { LOGO } from "@/constants";
import { links } from "@/config/links";
import Link from "next/link";
import { cn } from "@/lib/utils";
const Header = () => {
  return (
    <header className="w-full relative h-[60px] flex items-center justify-between bg-color-primary">
      <Image src={LOGO} alt="Nexcent Logo" width={155} height={24} />

      <nav className="hidden lg:flex">
        <ul className="flex items-center justify-center gap-8">
          {links.navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={cn(
                  "text-base hover:text-primary hover:font-medium hover:underline hover:underline-offset-4"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="items-center justify-center gap-4 hidden md:flex">
        {links.actions.map((action) => (
          <Link
            href={action.href}
            className={cn(
              "text-primary font-sm px-4 py-1 rounded-md",
              action.variant === "primary" &&
                "bg-primary text-silver hover:bg-primary/80",
              action.variant !== "primary" &&
                "hover:underline hover:underline-offset-4"
            )}
            key={action.name}
          >
            {action.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-menu-icon lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </div>
    </header>
  );
};
export default Header;
