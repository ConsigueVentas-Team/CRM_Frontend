import { useState } from "react";
import { Bill } from "@/types/bill";
import { InvoiceSearch } from "./Components/InvoiceSearch";
import { InvoiceData } from "./Components/InvoiceData";
import { ActionSelection } from "./Components/ActionSelection";

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

function Billing() {
  const [factura, setFactura] = useState(INITIAL_STATE);
  const [facturas, setFacturas] = useState<Bill[]>([]);

  return (
    <>
      <ActionSelection
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

export default Billing;
