import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";
import { UserDropdownMenu } from "@/components/UserDropdownMenu";
import { LogoIcon, LogoIconExpanded } from "@/components/icons";
import UserNotification from "@/components/UserNotification";

function AppLayout() {
  const [isExpanded, setIsExpanded] = useState(false);

  const btnUpdateMenuVisibility = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="bg-background h-16 relative border-b-2 z-50">
        <div className="h-full flex items-center justify-end p-6 gap-16 ">
          <div className="flex gap-16">
            <UserNotification />
            <UserDropdownMenu />
          </div>
        </div>
        <div
          className={` ${
            isExpanded ? "w-72" : "w-20"
          } duration-200 bg-background h-screen absolute top-0 border-r z-50`}
        >
          <div className={`mx-auto pt-4 ${isExpanded && "pl-6"}`}>
            {isExpanded ? (
              <LogoIconExpanded className="h-16 w-[9.9rem] origin-left duration-200 scale-110" />
            ) : (
              <LogoIcon className="w-[3rem] h-16 origin-left duration-200 scale-100 mx-auto" />
            )}
          </div>
          <div className="grow">
            <Navbar
              isExpanded={isExpanded}
              btnUpdateMenuVisibility={btnUpdateMenuVisibility}
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          isExpanded &&
          "left-[10.1rem] w-[35.4rem] xl:left-[8.2rem] xl:w-[106rem] scale-90 origin-right"
        } transition-all duration-300 relative ml-10 xl:ml-0`}
      >
        <Outlet />
      </div>
      <Toaster />
      <TailwindIndicator />
    </div>
  );
}

export default AppLayout;
