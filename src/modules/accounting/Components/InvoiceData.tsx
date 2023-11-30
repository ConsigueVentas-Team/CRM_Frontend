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

interface Props {
  facturas: Bill[];
}

export function InvoiceData({ facturas }: Props) {
  const formatCurrency = (amount: number, currency: string) => {
    const formattedAmount = accounting.formatMoney(amount, {
      symbol: currency === "dolares" ? "$" : "S/.",
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
