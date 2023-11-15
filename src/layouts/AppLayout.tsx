import { useState } from "react";

import { Outlet } from "react-router-dom";

import Navbar from "@/components/navbar";
import { TailwindIndicator } from "@/components/tailwind-indicator";

import BurgerIcon from "../assets/icons/BurgerIcon.svg";
import Logo from "../assets/icons/cv.png";

function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const btnUpdateMenuVisibility = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="bg-primary h-16 relative">
        <div className="h-full flex justify-between items-center">
          <button
            onClick={btnUpdateMenuVisibility}
            className="h-16 w-16 bg-secondary flex items-center justify-center"
          >
            <img className="h-3/5" src={BurgerIcon} alt="menuIcon" />
          </button>
          <div>PERFIL</div>
        </div>
        {menuOpen && (
          <div className="bg-secondary h-screen absolute top-0 left-0 flex flex-col">
            <button
              onClick={btnUpdateMenuVisibility}
              className="h-16 w-16 flex items-center justify-center"
            >
              <img className="h-3/5" src={Logo} alt="menuIcon" />
            </button>
            <div className="grow">
              <Navbar />
            </div>
          </div>
        )}
      </div>
      <div className="grow">
        <Outlet />
      </div>
      <TailwindIndicator />
    </div>
  );
}

export default AppLayout;
