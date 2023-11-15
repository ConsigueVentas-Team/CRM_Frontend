import { Profile } from "@/ui/users/pages/Profile";
import FileUpload from "@/components/FileUpload";
import AppLayout from "@/layouts/AppLayout";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Navigate } from "react-router-dom";

const appRouter = {
  path: "/",
  element: <AppLayout />,
  children: [
    {
      path: "dashboard",
      element: (
        <ProtectedRoute>
          <div>
            <h1>DASHBAORDS</h1>
          </div>
        </ProtectedRoute>
      ),
    },
    {
      path: "users",
      element: (
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      ),
    },
    {
      path: "file",
      element: (
        <ProtectedRoute>
          <FileUpload />
        </ProtectedRoute>
      ),
    },
    {
      path: "*",
      element: <Navigate to="/dashboard" />,
    },
  ],
};

export default appRouter;
