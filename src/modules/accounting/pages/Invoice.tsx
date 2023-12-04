import { useState } from "react";
import { Bill } from "@/types/bill";
import { InvoiceSearch } from "../Components/InvoiceSearch";
import { InvoiceData } from "../Components/InvoiceData";
import { useTitle } from "@/hooks/useTitle";
import { InvoiceActions } from "../Components/InvoiceActions";

export const INITIAL_STATE: Bill = {
  fechaEmision: "",
  serie: "",
  numero: "",
  ruc: "",
  razSocial: "",
  direccion: "",
  descripcion: "",
  monto: "",
  moneda: "soles",
  estado: "PAGADO",
};

function Invoice() {
  useTitle("Facturación");
  const [factura, setFactura] = useState(INITIAL_STATE);
  const [facturas, setFacturas] = useState<Bill[]>([]);

  return (
    <>
      <InvoiceActions
        factura={factura}
        setFactura={setFactura}
        facturas={facturas}
        setFacturas={setFacturas}
      />
      <InvoiceSearch />
      <InvoiceData facturas={facturas} />
    </>
  );
}

export default Invoice;
