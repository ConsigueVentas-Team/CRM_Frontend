import FileUpload from "../../src/components/FileUpload";

const reportRouter = {
  path: "/",
  children: [
    {
      path: "file",
      element: <FileUpload />,
    }
  ],
};

export default reportRouter;

