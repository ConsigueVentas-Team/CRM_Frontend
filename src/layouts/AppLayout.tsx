import { useState } from "react";

import { Link, Outlet } from "react-router-dom";

import Navbar from "@/components/navbar";
import { TailwindIndicator } from "@/components/tailwind-indicator";

import BurgerIcon from "../assets/icons/BurgerIcon.svg";
import Logo from "../assets/icons/cv.png";
import { Toaster } from "@/components/ui/toaster";

import { UserDropdownMenu } from "@/components/UserDropdownMenu";
import { LogoIcon } from "@/components/icons";

function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const btnUpdateMenuVisibility = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="bg-background h-16 relative border-b-2">
        <div className="h-full flex justify-between items-center pr-4">
          <button
            onClick={btnUpdateMenuVisibility}
            className="h-16 w-16 bg-primary flex items-center justify-center"
          >
            <img className="h-3/5" src={BurgerIcon} alt="menuIcon" />
          </button>
          <UserDropdownMenu/>
        </div>
        {menuOpen && (
          <div className="bg-background h-screen absolute top-0 left-0 flex flex-col border-r">
            <button
              onClick={btnUpdateMenuVisibility}
              className="h-16 w-16 flex items-center justify-center"
            >
              <LogoIcon className="h-3/5" />
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
      <Toaster />
      <TailwindIndicator />
    </div>
  );
}

export default AppLayout;
