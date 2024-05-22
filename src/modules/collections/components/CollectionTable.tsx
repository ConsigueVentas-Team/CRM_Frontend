import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { searchCollection } from "../hooks/Searchcollection";
import { getPaymentType } from "@/enums/paymentType";
import { getSaleStatus } from "@/enums/SaleStatus";

const columnLabels: { [key: string]: string } = {
  name: "Nombre",
  lastname: "Apellido",
  email: "Correo electrónico",
  phone: "Teléfono",
  total: "Total",
  paymentType: "Tipo de Pago",
  saleStatus: "Estado",
  date: "Fecha",
  estado: "Estado",

};

export function CollectionTable() {
  const { salesData, loading } = searchCollection();
  const tableHeaders = ["ID","Nombre","Apellido","Correo electrónico","Teléfono","Fecha", "Total","Tipo de Pago","Estado"];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
       
        <DropdownMenu>
          {/* FILTRO DE CATEGORIAS  */}
          {/* <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columnas <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger> */}
          <DropdownMenuContent align="end">
            {Object.keys(columnLabels).map((column) => (
              <DropdownMenuCheckboxItem key={column} className="capitalize">
                {columnLabels[column]}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {tableHeaders.map((header) => (
                <TableHead key={header} className="text-center">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="text-center">
            {salesData.length ? (
              salesData.map((sale) => (
                <TableRow key={sale.saleID}>
                <TableCell>{sale.saleID}</TableCell>
                <TableCell>{sale.name}</TableCell>
                <TableCell>{sale.lastname}</TableCell>
                <TableCell>{sale.email}</TableCell>
                <TableCell>{sale.phone}</TableCell>
                <TableCell>{sale.date}</TableCell>
                <TableCell>{sale.total}</TableCell>
                {/* <TableCell>{sale.paymentType}</TableCell> */}
                <TableCell>{getPaymentType(sale.paymentType)}</TableCell>
                {/* <TableCell>{sale.saleStatus}</TableCell> */}
                <TableCell>
                    {sale.saleStatus === 1 ? (
                      <Badge
                        variant="outline"
                        className="border-green-500 text-green-500 capitalize"
                      >
                        {getSaleStatus(sale.saleStatus)}
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="border-red-500 text-red-500 capitalize"
                      >
                        {getSaleStatus(sale.saleStatus)}
                      </Badge>
                    )}
                  </TableCell>
              </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={tableHeaders.length}>
                  No hay resultados
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button variant="outline" size="sm">
          Anterior
        </Button>
        <Button variant="outline" size="sm">
          Siguiente
        </Button>
      </div>
    </div>
  );
}
