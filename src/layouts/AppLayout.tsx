import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="bg-[#283C4C] w-full h-full">
      <h2>APPP LATYOUT</h2>
      <Outlet />
    </div>
  );
}

export default AppLayout;
