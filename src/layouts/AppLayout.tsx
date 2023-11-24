import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";
import { UserDropdownMenu } from "@/components/UserDropdownMenu";
import { LogoIcon } from "@/components/icons";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import UserNotification from "@/components/UserNotification";

function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const btnUpdateMenuVisibility = () => {
    setMenuOpen(!menuOpen);
  };

  const navContainer = {
    visible: {
      x: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      x: -250,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="bg-background h-16 relative border-b-2">
        <div className="h-full flex justify-between items-center pr-6">
          <button
            onClick={btnUpdateMenuVisibility}
            className={
              "h-full w-16 bg-primary flex items-center justify-center"
            }
          >
            <Menu className="stroke-background" />
          </button>
          <div className="flex items-center gap-16">
            <UserNotification />
            <UserDropdownMenu />
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="bg-background h-screen absolute top-0 left-0 flex flex-col border-r z-50"
              initial="hidden"
              animate={menuOpen ? "visible" : "hidden"}
              exit="hidden"
              variants={navContainer}
            >
              <button
                onClick={btnUpdateMenuVisibility}
                className="h-16 w-16 flex items-center justify-center"
              >
                <LogoIcon className="h-3/5" />
              </button>
              <div className="grow">
                <Navbar />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
