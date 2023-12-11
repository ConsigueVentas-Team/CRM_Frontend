import { Label } from "@/components/ui/label";
import PDFExportButton from "./ExportTable";
import { Bill } from "@/types/bill";
import { NewInvoice } from "./ModalNewInvoice";

interface Props {
  factura: Bill;
  setFactura: (factura: Bill) => void;
  facturas: Bill[];
  setFacturas: (facturas: Bill[]) => void;
}

export function InvoiceActions({
  factura,
  setFactura,
  facturas,
  setFacturas,
}: Props) {
  return (
    <div className="flex justify-center items-center flex-col pr-20 pb-20 pt-20 pl-20">
      <Label className="pb-5 text-xl">¿Qué acción quieres llevar a cabo?</Label>
      <div className="w-1/2 flex justify-center">
        <NewInvoice
          factura={factura}
          setFactura={setFactura}
          facturas={facturas}
          setFacturas={setFacturas}
        />
        <PDFExportButton data={facturas} />
      </div>
    </div>
  );
}
