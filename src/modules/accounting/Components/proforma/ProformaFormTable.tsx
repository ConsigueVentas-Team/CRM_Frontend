import React from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  RowData,
  flexRender,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableProps {
  data: RowData[];
}

function ProformaFormTable({ data }: TableProps) {
  const columns: ColumnDef<RowData>[] = [
    {
      accessorKey: "column1",
      header: "Column 1",
      cell: ({ row }) => (
        <Input placeholder="column1" value={row.getValue("column1")} />
      ),
    },
    {
      accessorKey: "column2",
      header: "Column 2",
      cell: ({ row }) => (
        <Input placeholder="column2" value={row.getValue("column2")} />
      ),
    },
    {
      accessorKey: "column3",
      header: "Column 3",
      cell: ({ row }) => (
        <Input placeholder="column3" value={row.getValue("column3")} />
      ),
    },
    {
      accessorKey: "column4",
      header: "Column 4",
      cell: ({ row }) => (
        <Input placeholder="column4" value={row.getValue("column4")} />
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border w-[70%] relative top-[10rem]">
      <Table className="w-full">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ProformaFormTable;
