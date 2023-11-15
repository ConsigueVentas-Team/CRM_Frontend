import NavItem from "./NavItem";

import { MENU_ITEMS } from "@/constants";

function Navbar() {
  return (
    <nav className="h-full bg-white">
      {MENU_ITEMS.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </nav>
  );
}

export default Navbar;
