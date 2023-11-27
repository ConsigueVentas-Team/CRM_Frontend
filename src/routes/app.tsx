import { Profile } from "@/ui/profile/pages/Profile";
import AppLayout from "@/layouts/AppLayout";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Navigate } from "react-router-dom";
import FileUpload from "@/components/FileUpload";
import ReportDashboard from "../../src/components/ReportDashboard";
import Billing from "@/ui/accounting/Billing";
import { Users } from "@/ui/profile/pages/Users";

const appRouter = [
  {
    path: "/",
    element:
      //<ProtectedRoute>
        <AppLayout />,
      //</ProtectedRoute>,
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
        path: "profile",
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
        path: "users",
        element: <Users />,
      },
      {
        path: "*",
        element: <Navigate to="/dashboard" />,
      },
    ],
  },
];

export default appRouter;
