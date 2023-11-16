import { Profile } from "@/ui/users/pages/Profile";
import AppLayout from "@/layouts/AppLayout";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Navigate } from "react-router-dom";
import FileUpload from "@/components/FileUpload";
import ReportDashboard from "../../src/components/ReportDashboard";

const appRouter = [
  {
    path: "/",
    element:
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>,
    children: [
      {
        path: "dashboard",
        element: <div><h1>DASHBOARD</h1></div>,
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
      }
    ],
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" />,
  },
];

export default appRouter;