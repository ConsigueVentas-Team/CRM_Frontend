import AppLayout from "@/layouts/AppLayout";
import { Navigate } from "react-router-dom";
import { Profile } from "@/modules/profile/pages/Profile";
import ReportDashboard from "@/modules/reports/components/ReportDashboard";
import FileUpload from "@/modules/reports/components/FileUpload";
import { Users } from "@/modules/user/pages/Users";
import { HomePage } from "@/pages/Home";
import Invoice from "@/modules/accounting/pages/Invoice";
import Expense from "@/modules/accounting/pages/Expense";
import { Proforma } from "@/modules/accounting/pages/Proforma";
import ProtectedRoute from "@/components/ProtectedRoute";
import ProformaCreate from "@/modules/accounting/Components/proforma/ProformaCreate";

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
        path: "invoice",
        element: <Invoice />,
      },
      {
        path: "expense",
        element: <Expense />,
      },
      {
        path: "proforma",
        element: <Proforma />,
      },
      {
        path: "proforma/create",
        element: <ProformaCreate />,
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
