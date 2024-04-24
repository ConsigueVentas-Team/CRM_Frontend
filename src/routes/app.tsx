//import ProtectedRoute from "@/components/ProtectedRoute";
import AppLayout from "@/layouts/AppLayout";
import { Categorias } from "@/modules/configuration/pages/Category";
import { Configuration } from "@/modules/configuration/pages/Configuration";
import { Clients } from "@/modules/client/pages/Clients";
import { Inventory } from "@/modules/inventory/pages/inventory";
import { Profile } from "@/modules/profile/pages/Profile";
import { Sales } from "@/modules/sale/pages/Sales";
import { Users } from "@/modules/user/pages/Users";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardPage from "@/pages/Dashboard";
import SettingsAppearancePage from "@/modules/configuration/pages/Appearance";
import { Promociones } from "@/modules/configuration/pages/Promotion";


const appRouter = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/sales",
        element: <Sales />
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "configuration",
        element: <Configuration />,
        children: [
          {
            path: "categorias",
            element: <Categorias />,
          },
          {
            path: "apariencia",
            element: <SettingsAppearancePage />,
          },
          {
            path: "promociones",
            element: <Promociones />,
          },
          // ... otras rutas secundarias según sea necesario ...
        ],
      },
    ],
  },
];

export default appRouter;
