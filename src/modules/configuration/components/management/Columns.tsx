import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { CategoriaDetail as CategoriaDetailType } from "@/types/auth";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import {
    Sheet,
    SheetTrigger,
} from "@/components/ui/sheet";
import { CategoriaDetail } from "../CategoriaDetail";


export const columns: ColumnDef<CategoriaDetailType>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                className="ml-4"
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nombres
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div>{row.getValue("name")}</div>
        ),
    },
    {
        accessorKey: "description",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Descripcion
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div>{row.getValue("description")}</div>
        ),
    },
    {
        accessorKey: "color",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Color
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div>{row.getValue("color")}</div>
        ),
    },

    {
        id: "edit",
        enableHiding: false,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        cell: ({ row }) => {
            const categoria = row.original;
            return (
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">Editar</Button>
                    </SheetTrigger>
                    <CategoriaDetail categoria={categoria} />
                </Sheet>
            );
        },
    },

];
