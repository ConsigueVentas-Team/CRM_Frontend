import { useState } from "react";
import { Bill } from "@/types/bill";
import { InvoiceSearch } from "../Components/InvoiceSearch";
import { InvoiceData } from "../Components/InvoiceData";
import { useTitle } from "@/hooks/useTitle";
import { InvoiceActions } from "../Components/InvoiceActions";

export const INITIAL_STATE: Bill = {
  date_of_issue: "",
  serie: "",
  number: "",
  ruc: "",
  business_name: "",
  address: "",
  description: "",
  amount: "",
  money: "",
  status: true,
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
