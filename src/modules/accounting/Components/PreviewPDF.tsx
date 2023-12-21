import { PDFViewer } from "@react-pdf/renderer";
import { PDF } from "../pages/PDF";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
interface Props {
  dataDetail: ProformaDataTable;
}
const PreviewPDF = ({ dataDetail }: Props) => {
  return (
    <PDFViewer style={{ width: "100%", height: "80vh" }}>
      <QueryClientProvider client={queryClient}>
        <PDF dataDetail={dataDetail} />
      </QueryClientProvider>
    </PDFViewer>
  );
};

export default PreviewPDF;
