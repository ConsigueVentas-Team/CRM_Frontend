import { Input } from "@/components/ui/input";
import { ColumnDef, RowData } from "@tanstack/react-table";

export const SecondaryColumn: ColumnDef<RowData>[] = [
  {
    id: "first",
    header: () => { return <div></div> }
   },
  {
    accessorKey: "column1",
    header: () => "column1",
    cell: ({ row }) => {
      return <Input placeholder="column1" value={row.getValue("")} />;
    },
  },
  {
    accessorKey: "column2",
    header: "Column 2",
    cell: ({ row }) => {
      return <Input placeholder="column2" value={row.getValue("")} />;
    },
  },
  {
    accessorKey: "column3",
    header: "Column 3",
    cell: ({ row }) => {
      return <Input placeholder="column3" value={row.getValue("")} />;
    },
  },
  {
    accessorKey: "column4",
    header: "Column 4",
    cell: ({ row }) => {
      return <Input placeholder="column4" value={row.getValue("")} />;
    },
  },
];
