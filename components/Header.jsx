import Image from "next/image";
import { LOGO } from "@/constants";
import { navbar } from "@/config/links";
import Link from "next/link";

const Header = () => {
  return (
    <header className="container relative h-[60px] flex items-center justify-between bg-color-primary">
      <Image src={LOGO} alt="Nexcent Logo" width={155} height={24} />

      <nav>
        <ul className="flex items-center justify-center gap-8">
          {navbar.navLinks.map((link) => (
            <li key={link.name}>{link.name}</li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center justify-center gap-4 text-lg ring-2">
        {navbar.actions.map((action) => (
          <Link
            href={action.href}
            className={`${action.variant === "primary" ? "bg-primary" : ""}`}
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
