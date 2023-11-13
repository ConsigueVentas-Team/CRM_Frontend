import { Profile } from "@/ui/users/pages/Profile";
import AppLayout from "../layouts/AppLayout";

const appRouter = {
  path: "/",
  element: <AppLayout />,
  children: [
    {
      path: "dashboard",
      element: (
        <div>
          <h1>DASHBAORDS</h1>
        </div>
      ),
    },
    {
      path: "users",
      element: (<Profile />),
    }
  ],
};

export default appRouter;
