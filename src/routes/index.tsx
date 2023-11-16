import { useRoutes } from "react-router-dom";

import appRouter from "./app";
import authRouter from "./auth";
import reportRouter from "./reports";

function AppRouter() {
  return useRoutes([...authRouter, reportRouter, appRouter]);
}

export default AppRouter;
