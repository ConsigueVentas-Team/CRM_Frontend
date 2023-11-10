import { useRoutes } from "react-router-dom";

import appRouter from "./app";
import authRouter from "./auth";

function AppRouter() {
  return useRoutes([...authRouter, appRouter]);
}

export default AppRouter;
