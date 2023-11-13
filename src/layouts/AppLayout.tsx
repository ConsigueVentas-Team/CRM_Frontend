import { useState } from "react";

import { Outlet } from "react-router-dom";

import Navbar from "@/components/navbar";

function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const btnUpdateMenuVisibility = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="bg-primary h-16 relative">
        <div className="h-full flex justify-between items-center">
          <button onClick={btnUpdateMenuVisibility}>MENU</button>
          <div>PERFIL</div>
        </div>
        {menuOpen && <Navbar />}
      </div>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
