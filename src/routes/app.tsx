import AppLayout from "@/layouts/AppLayout";
import { Navigate } from "react-router-dom";
import Bills from "@/ui/bills/pages/Bills";
import Billing from "@/ui/accounting/Billing";
import { Profile } from "@/ui/profile/pages/Profile";
import ReportDashboard from "@/ui/reports/components/ReportDashboard";
import FileUpload from "@/ui/reports/components/FileUpload";
import { Users } from "@/ui/user/pages/Users";

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
