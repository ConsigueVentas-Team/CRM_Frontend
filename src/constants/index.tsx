import { File, Layout, PieChart, Upload, UserCircle } from "lucide-react";

const MENU_ITEMS = [
  {
    name: "Dashboard",
    url: "/",
    icon: <Layout/>,
  },
  {
    name: "Profile",
    url: "/users",
    icon: <UserCircle/>,
  },
  {
    name: "Files",
    url: "/file",
    icon: <Upload/>,
  },
  {
    name: "Billing",
    url: "/billing",
    icon: <File/>,
  },
  {
    name: "Reports",
    url: "/reports",
    icon: <PieChart/>,
  }
];

export { MENU_ITEMS };
