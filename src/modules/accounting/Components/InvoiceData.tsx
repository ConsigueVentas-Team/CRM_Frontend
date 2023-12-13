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
import { useEffect, useState } from 'react';
import { toast } from "@/hooks/useToast";
import api from "@/services/api";

interface Props {
  facturas: Bill[];
}

export function InvoiceData({ facturas }: Props) {
  const [modal, setModal] = useState(false);
  const [facturaToDelete, setFacturaToDelete] = useState<Bill | null>(null);
  const [dataFromApi, setDataFromApi] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.get("invoices");
        const data = response.data;
        console.log(data)
        setDataFromApi(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener datos:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const invoicesToDisplay = dataFromApi.length > 0 ? dataFromApi : facturas;

  const handleEdit = (index: number) => {
    // Lógica para editar una factura
  };

  const handleDelete = (index: number) => {
    setFacturaToDelete(invoicesToDisplay[index]);
    setModal(true);
  };

  const closeModal = () => {
    setFacturaToDelete(null);
    setModal(false);
  };

  const handleEliminarFactura = async (factura: Bill) => {
    console.log("Eliminando factura:", factura);

    try {
      setLoading(true);
      const response = await api.delete(`invoices/delete/${factura.id}`);
      if (response.status === 204) {
        toast({
          title: "Factura eliminada exitosamente",
        });
      } else {
        toast({
          title: "Error al eliminar la factura",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error al eliminar la factura:', error);
      toast({
        title: "Error al eliminar la factura",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      closeModal();
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    const formattedAmount = accounting.formatMoney(amount, {
      symbol: currency === "USD" ? "$" : "S/.",
      format: "%s%v",
      precision: 2,
    });

    return formattedAmount;
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
          {invoicesToDisplay.map((factura, index) => (
            <TableRow key={index}>
              <TableCell>{factura.date_of_issue}</TableCell>
              <TableCell>{factura.serie}</TableCell>
              <TableCell>{factura.number}</TableCell>
              <TableCell>{factura.ruc}</TableCell>
              <TableCell>{factura.business_name}</TableCell>
              <TableCell>{factura.address}</TableCell>
              <TableCell>{factura.description}</TableCell>
              <TableCell>
                {formatCurrency(parseInt(factura.amount), factura.money)}
              </TableCell>
              <TableCell
                style={{
                  color: factura.status === "PAGADO" ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {factura.status}
              </TableCell>
              <TableCell className="flex justify-around">
                <button
                  onClick={() => handleEdit(index)}
                >
                  <Edit className="w-5/6" />
                </button>
                <ModalDelete factura={factura} onDelete={handleEliminarFactura}>
                  <Trash2 className="w-5/6"/>
                </ModalDelete>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
