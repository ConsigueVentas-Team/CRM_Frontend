// src/collections/components/collectionTable/CollectionTable.tsx

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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const columnLabels: { [key: string]: string } = {
  name: "Nombre",
  description: "Descripción",
  price: "Precio",
  stock: "Stock",
  status: "Estado",
};

export function CollectionTable() {
  const tableHeaders = ["Nombre", "Descripción", "Precio", "Stock", "Estado"];
  const tableData = [
    {
      name: "Producto 1",
      description: "Descripción 1",
      price: 10,
      stock: 100,
      status: "Activo",
    },
    {
      name: "Producto 2",
      description: "Descripción 2",
      price: 20,
      stock: 200,
      status: "Inactivo",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <input
          placeholder="Filtrar por palabra clave"
          className="max-w-sm p-2 border rounded"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columnas <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
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
            {tableData.length ? (
              tableData.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.stock}</TableCell>
                  <TableCell>{row.status}</TableCell>
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
