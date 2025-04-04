import Image from "next/image";
import { LOGO } from "@/constants";
import { navbar } from "@/config/links";

const Header = () => {
  return (
    <header className="container relative h-[60px] flex items-center justify-between bg-color-primary">
      <Image src={LOGO} alt="Nexcent Logo" width={155} height={24} />

      <nav>
        <ul className="flex items-center justify-center gap-4">
          {navbar.navLinks.map((link) => (
            <li key={link.name}>{link.name}</li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center justify-center gap-4">
        {navbar.actions.map((action) => (
          <button key={action.name}>{action.name}</button>
        ))}
      </div>
    </header>
  );
};
export default Header;
