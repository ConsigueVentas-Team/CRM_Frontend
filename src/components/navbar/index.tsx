import NavItem from "./NavItem";

import { MENU_ITEMS } from "@/constants";

function Navbar() {
  return (
    <nav className="h-full bg-background">
      {MENU_ITEMS.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </nav>
  );
}

export default Navbar;
