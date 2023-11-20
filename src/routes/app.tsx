import { Profile } from "@/ui/users/pages/Profile";
import AppLayout from "@/layouts/AppLayout";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Navigate } from "react-router-dom";
import FileUpload from "@/components/FileUpload";
import ReportDashboard from "../../src/components/ReportDashboard";
import Billing from "@/ui/users/pages/Billing";

const appRouter = [
  {
    path: "/",
    element:
<<<<<<< HEAD
      //<ProtectedRoute>
        <AppLayout />,
      //</ProtectedRoute>,
=======
      // <ProtectedRoute>
      <AppLayout />,
    // </ProtectedRoute>,
>>>>>>> 088b92c2e3e64fe36c42c8621d9f7e5f16a81c14
    children: [
      {
        path: "dashboard",
        element: (
          <div>
            <h1>DASHBOARD</h1>
          </div>
        ),
      },
      {
        path: "users",
        element: <Profile />,
      },
      {
        path: "file",
        element: <FileUpload />,
      },
      {
        path: "reports",
        element: <ReportDashboard />,
      },
      {
        path: "billing",
        element: <Billing />,
      },
      {
        path: "*",
        element: <Navigate to="/dashboard" />,
      },
    ],
  },
];

export default appRouter;
