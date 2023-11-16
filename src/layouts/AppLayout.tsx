import { useState } from "react";

import { Link, Outlet } from "react-router-dom";

import Navbar from "@/components/navbar";
import { TailwindIndicator } from "@/components/tailwind-indicator";

import BurgerIcon from "../assets/icons/BurgerIcon.svg";
import Logo from "../assets/icons/cv.png";
import { Toaster } from "@/components/ui/toaster";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function AppLayout() {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const btnUpdateMenuVisibility = () => {
    setMenuOpen(!menuOpen);
  };

  const signOut = () => {
    dispatch(logout());
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="bg-primary h-16 relative">
        <div className="h-full flex justify-between items-center pr-4">
          <button
            onClick={btnUpdateMenuVisibility}
            className="h-16 w-16 bg-secondary flex items-center justify-center"
          >
            <img className="h-3/5" src={BurgerIcon} alt="menuIcon" />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-10 h-10 rounded-full overflow-hidden">
              <Avatar>
                <AvatarImage
                  src="https://randomuser.me/api/portraits/med/men/75.jpg"
                  alt="@user"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-4">
              <DropdownMenuLabel>Opciones</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link className="flex items-center" to="/users">
                <Button
                  variant="ghost"
                  className="w-full flex items-center justify-start"
                >
                  <UserCircle className="mr-2 h-4 w-4" /> Perfil
                </Button>
              </Link>
              <Button
                variant="ghost"
                className="w-full flex items-center justify-start"
                onClick={signOut}
              >
                <LogOut className="mr-2 h-4 w-4" /> Salir
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
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
      <Toaster />
      <TailwindIndicator />
    </div>
  );
}

export default AppLayout;
