import { ColumnDef } from "@tanstack/react-table";
import { Payment } from "@/types/purchase";
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

/*const createColumn = (accessorKey: keyof PaymentDetail, label: string): ColumnDef<PaymentDetail> => ({
  accessorKey,
  header: () => (
    <div className="flex items-center justify-center">
      <span>{label}</span>
    </div>
  ),
  cell: ({ row }) => <div className="flex items-center justify-center">{row.getValue(accessorKey)}</div>,
});

export const columns : ColumnDef<PaymentDetail>[] = [
  createColumn("id", "ID"),
  createColumn("purchase_id", "Codigo de Compra"),
  createColumn("date_payment", "Fecha"),
  createColumn("date_limit", "Fecha Límite"),
  createColumn("payment_method", "Método de Pago"),
  createColumn("total", "Total"),
  createColumn("cancelled_total", "Total Cancelado"),
  createColumn("status", "Estado")
]*/

const createColumn = (accessorKey: keyof Payment, label: string, sortable: boolean = false): ColumnDef<Payment> => {
  return {
    accessorKey,
    header: ({ column }) => (
      <div className="flex items-center justify-center text-white font-semibold">
        <span>{label}</span>
        {sortable && (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className="ml-2"
          >
            {column.getIsSorted() === 'desc' ? (
              <FaSortDown />
            ) : column.getIsSorted() === 'asc' ? (
              <FaSortUp />
            ) : (
              <FaSort />
            )}
          </button>
        )}
      </div>
    ),
    cell: ({ cell }) => (
      <div className="flex items-center justify-center">
        {accessorKey === 'date_payment' || accessorKey === 'date_limit'
          ? new Date(cell.getValue() as Date).toLocaleDateString()
          : cell.getValue() as React.ReactNode}
      </div>
    ),
  };
};

export const columns: ColumnDef<Payment>[] = [
  createColumn("id", "ID"),
  createColumn("purchase_id", "Código de Compra"),
  createColumn("date_payment", "Fecha", true),
  createColumn("date_limit", "Fecha Límite"),
  createColumn("payment_method", "Método de Pago"),
  createColumn("total", "Total", true), // Hacemos esta columna sortable
  createColumn("cancelled_total", "Total Cancelado"),
  createColumn("status", "Estado"),
];