"use client";

import Image from "next/image";
import { LOGO } from "@/constants";
import { links } from "@/config/links";
import Link from "next/link";
import { cn } from "@/lib/utils";
const Header = () => {
  return (
    <header className="container relative h-[60px] flex items-center justify-between bg-color-primary">
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

      <div className="flex items-center justify-center gap-4">
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
    </header>
  );
};
export default Header;
