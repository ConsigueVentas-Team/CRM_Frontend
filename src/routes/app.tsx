//import ProtectedRoute from "@/components/ProtectedRoute";
import AppLayout from "@/layouts/AppLayout";
import { Inventory } from "@/modules/inventory/pages/inventory";
import { Profile } from "@/modules/profile/pages/Profile";
import { Clients } from "@/modules/client/pages/Clients";
import { Configuration } from "@/modules/configuration/pages/Configuration";
import { Categorias } from "@/modules/configuration/pages/Categoria";
import EmpleadoPage from "@/modules/configuration/pages/EmpleadoPage";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardPage from "@/pages/Dashboard";
import { Users } from "@/modules/user/pages/Users";

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
        path: "/users",
        element: <Users />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "inventory",
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
            path: "empleado1",
            element: <EmpleadoPage />,
          },
          // ... otras rutas secundarias según sea necesario ...
        ],
      },
    ],
  },
];

export default appRouter;
