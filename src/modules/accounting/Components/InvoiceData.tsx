import { Bill } from "@/types/bill";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import accounting from "accounting";
import { Edit, Trash2 } from "lucide-react";
import ModalDelete from "./ModalDelete";
import { useState } from "react";

interface Props {
  facturas: Bill[];
}

export function InvoiceData({ facturas }: Props) {
  const [modal, setModal] = useState(false);
  const [facturaToDelete, setFacturaToDelete] = useState<Bill | null>(null);

  const formatCurrency = (amount: number, currency: string) => {
    const formattedAmount = accounting.formatMoney(amount, {
      symbol: currency === "dolares" ? "$" : "S/.",
      format: "%s%v",
      precision: 2,
    });

    return formattedAmount;
  };

  const handleEdit = (index: number) => {
  };

  const handleDelete = (index: number) => {
    setFacturaToDelete(facturas[index]);
    setModal(true);
  };

  const closeModal = () => {
    setFacturaToDelete(null);
    setModal(false);
  };

  return (
    <div className="pb-20">
      <Table className="border-2 black shadow-md">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">FECHA DE EMISIÓN</TableHead>
            <TableHead className="font-bold">SERIE</TableHead>
            <TableHead className="font-bold">NÚMERO</TableHead>
            <TableHead className="font-bold">RUC</TableHead>
            <TableHead className="font-bold">RAZÓN SOCIAL</TableHead>
            <TableHead className="font-bold">DIRECCIÓN</TableHead>
            <TableHead className="font-bold">DESCRIPCIÓN</TableHead>
            <TableHead className="font-bold">MONTO</TableHead>
            <TableHead className="font-bold">ESTADO</TableHead>
            <TableHead className="font-bold">ACCIONES</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {facturas.map((factura, index) => (
            <TableRow key={index}>
              <TableCell>{factura.fechaEmision}</TableCell>
              <TableCell>{factura.serie}</TableCell>
              <TableCell>{factura.numero}</TableCell>
              <TableCell>{factura.ruc}</TableCell>
              <TableCell>{factura.razSocial}</TableCell>
              <TableCell>{factura.direccion}</TableCell>
              <TableCell>{factura.descripcion}</TableCell>
              <TableCell>
                {formatCurrency(parseInt(factura.monto), factura.moneda)}
              </TableCell>
              <TableCell
                style={{
                  color: factura.estado === "PAGADO" ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {factura.estado}
              </TableCell>
              <TableCell className="flex justify-around">
                <button
                  onClick={() => handleEdit(index)}
                >
                  <Edit className="w-5/6" />
                </button>
                <button
                  onClick={() => handleDelete(index)}
                >
                  <Trash2 className="w-5/6" />
                </button>
              </TableCell>
              {modal && facturaToDelete && (
                <ModalDelete
                  factura={facturaToDelete}
                  onClose={closeModal}
                />
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
