import FileUpload from "../../src/components/FileUpload";
import ReportDashboard from "../../src/components/ReportDashboard";

const reportRouter = {
  path: "/",
  children: [
    {
      path: "file",
      element: <FileUpload />,
    },
    {
      path: "reports",
      element: <ReportDashboard />, 
    }
  ],
};

export default reportRouter;

