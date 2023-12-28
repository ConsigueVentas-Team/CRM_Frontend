import { PDFViewer } from "@react-pdf/renderer";
import { PDF } from "../pages/PDF";
import { useEffect, useState } from "react";
import api from "@/services/api";
import { toast } from "@/hooks/useToast";
import { Progress } from "@/components/ui/progress";
import { useQuery } from "react-query";

interface Props {
  dataDetail: ProformaDataTable;
}
const PreviewPDF = ({ dataDetail }: Props) => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  const { data, isLoading, error } = useQuery(
    ["proforma", dataDetail.proforma_id],
    async () => {
      const res = await api.get(`/proformas/${dataDetail.proforma_id}`);
      return res.data;
    }
  );

  useEffect(() => {
    setLoadingProgress(0);
    const increment = 100 / (25 * 10);

    const intervalId = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        const nextProgress = prevProgress + increment;

        if (nextProgress >= 100) {
          clearInterval(intervalId);
          return 100;
        }

        return nextProgress;
      });
    }, 100);
    
    return () => clearInterval(intervalId);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-[80vh] flex items-center justify-center">
        <Progress value={loadingProgress} className="bg-muted w-[20rem]" />
      </div>
    );
  }

  return (
    <PDFViewer style={{ width: "100%", height: "80vh" }}>
      {data && <PDF data={data} />}
    </PDFViewer>
  );
};

export default PreviewPDF;
