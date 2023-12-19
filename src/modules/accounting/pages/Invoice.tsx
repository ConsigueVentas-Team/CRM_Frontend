import { useState } from "react";
import { Bill } from "@/types/bill";
import { InvoiceSearch } from "../Components/Invoice/InvoiceSearch";
import { InvoiceData } from "../Components/Invoice/InvoiceData";
import { useTitle } from "@/hooks/useTitle";
import { InvoiceActions } from "../Components/Invoice/InvoiceActions";

export const INITIAL_STATE: Bill = {
  id:0,
  date_of_issue: "",
  serie: "",
  number: "",
  ruc: "",
  business_name: "",
  address: "",
  description: "",
  amount: "",
  money: "PEN",
  status: "PAGADO",
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
