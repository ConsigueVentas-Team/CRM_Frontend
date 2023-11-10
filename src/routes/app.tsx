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
  ],
};

export default appRouter;
