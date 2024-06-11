import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
  } from "@tanstack/react-table";
  import { Item as ItemDetail } from "@/types/purchase";
  import { fuzzyFilter } from "@/lib/utils";
  import { columns } from "./management/Columns";
  import { Skeleton } from "@/components/ui/skeleton";
  import { ShieldAlert } from "lucide-react";
  
  interface ItemDataTableProps {
    data: ItemDetail[];
    isLoading: boolean;
    handleDelete: (name: string) => void;
  }

  export function ItemDataTable({
    data,
    isLoading,
    handleDelete,
  }: ItemDataTableProps) {
    const table = useReactTable({
      data,
      columns: columns(handleDelete),
      autoResetPageIndex: false,
      filterFns: {
        fuzzy: fuzzyFilter,
      },
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      globalFilterFn: fuzzyFilter,
      initialState: {
        pagination: {
          pageSize: 5,
        },
      },
    });
    return (
      <div className="w-full">
        <div className="rounded-md border">  
          {isLoading ? (
            <Skeleton className="w-full h-[25rem]" />
          ) : (
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id} className="pl-6">
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
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={table.getHeaderGroups()[0].headers.length}
                      className="h-24 text-muted-foreground text-center"
                    >
                      <ShieldAlert className="w-6 h-6 mr-2 inline-block" />
                      No hay items agregados
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    );
  }
  