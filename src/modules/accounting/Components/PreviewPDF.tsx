import { PDFViewer } from "@react-pdf/renderer";
import { PDF } from "../pages/PDF";
import { useEffect, useState } from "react";
import api from "@/services/api";
import { toast } from "@/hooks/useToast";

interface Props {
  dataDetail: ProformaDataTable;
}
const PreviewPDF = ({ dataDetail }: Props) => {
  const [data, setData] = useState<ProformaPDF>()
  const [isLoading, setIsLoading] = useState(false)

  const fechData = async () => {
    setIsLoading(true)

    try {
      api.get(`/proformas/${dataDetail.proforma_id}`).then((res) => {
        console.log(res.data);
        setData(res.data)
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo obtener la proforma",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fechData()
  }, [])

  return (
    <PDFViewer style={{ width: "100%", height: "80vh" }}>
      {
        data && <PDF data={data} />
      }
    </PDFViewer>
  );
};

export default PreviewPDF;
