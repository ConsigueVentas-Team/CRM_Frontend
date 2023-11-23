import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PlusCircle } from "lucide-react";
import PDFExportButton from "./ExportTable";
import { useEffect, useState } from "react";
import { Bill } from "@/types/bill";
import NewInvoice from "./ModalNewInvoice";
import { INITIAL_STATE } from "../Billing";

interface Props {
    factura: Bill;
    setFactura: (factura: Bill) => void;
    facturas: Bill[];
    setFacturas: (facturas: Bill[]) => void;
}

export function ActionSelection({ factura, setFactura,facturas,setFacturas }: Props) {
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState("");

  const handleOpenModal = () => {
    setModal(true);
  };

  const resetModalState = () => {
    setFactura(INITIAL_STATE);
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setModal(false);
    resetModalState();
    setAlert("");
  };

  const handleAddInvoice = () => {
    if (
      !factura.fechaEmision ||
      !factura.serie ||
      !factura.numero ||
      !factura.ruc ||
      !factura.razSocial ||
      !factura.direccion ||
      !factura.descripcion ||
      !factura.monto ||
      !factura.moneda ||
      !factura.estado
    ) {
      setAlert(
        "Por favor, llene todos los campos antes de agregar una factura"
      );
      return;
    }

    const nuevaFactura = {
      ...factura,
      monto: Number(factura.monto),
    };
    setFacturas([...facturas, nuevaFactura]);
    console.log("Facturas: ", facturas);
    handleCloseModal();
  };

  useEffect(() => {
    resetModalState();
  }, []);

  const handleMonedaChange = (value: string) => {
    setFactura({ ...factura, moneda: value });
  };

  const handleEstadoChange = (value: string) => {
    setFactura({ ...factura, estado: value });
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col pr-20 pb-20 pt-20 pl-20">
        <Label className="pb-5 text-xl font-bold">
          ¿Qué acción quieres llevar a cabo?
        </Label>
        <div className="w-1/2 flex justify-center">
          <Button onClick={handleOpenModal} className="p-5 mr-5 shadow-lg">
            <PlusCircle className="mr-2" /> Nueva Factura
          </Button>
          <PDFExportButton data={facturas} />
        </div>
      </div>
      <div>
        {modal && (
          <NewInvoice
            factura={factura}
            setFactura={setFactura}
            modal={modal}
            alert={alert}
            handleCloseModal={handleCloseModal}
            handleAddInvoice={handleAddInvoice}
            handleMonedaChange={handleMonedaChange}
            handleEstadoChange={handleEstadoChange}
          />
        )}
      </div>
    </>
  );
}
