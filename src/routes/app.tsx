import AppLayout from "@/layouts/AppLayout";
import { Navigate } from "react-router-dom";
import Bills from "@/modules/bills/pages/Bills";
import Billing from "@/modules/accounting/Billing";
import { Profile } from "@/modules/profile/pages/Profile";
import ReportDashboard from "@/modules/reports/components/ReportDashboard";
import FileUpload from "@/modules/reports/components/FileUpload";
import { Users } from "@/modules/user/pages/Users";
import { HomePage } from "@/pages/Home";

const appRouter = [
  {
    path: "/",
    element:
      // <ProtectedRoute>
      <AppLayout />,
    // </ProtectedRoute>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
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
        path: "bills",
        element: <Bills />,
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
