import AppLayout from "@/layouts/AppLayout";
import { Inventory } from "@/modules/inventory/pages/inventory";
import { Profile } from "@/modules/profile/pages/Profile";
import { Users } from "@/modules/user/pages/Users";

const appRouter = [
  {
    path: "/",
    element: (
      // <ProtectedRoute>
      <AppLayout />
      //</ProtectedRoute>
    ),
    children: [
      {
        path: "/",
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
    ],
  },
];

export default appRouter;
