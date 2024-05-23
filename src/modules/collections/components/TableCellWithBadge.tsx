import React from "react";
import { TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { getSaleStatus } from "@/enums/SaleStatus";


interface TableCellWithBadgeProps {
  saleStatus: number;
}

// export const TableCellWithBadge: React.FC<TableCellWithBadgeProps> = ({ saleStatus }) => (
//   <TableCell>
//     {saleStatus === 1 ? (
//       <Badge
//         variant="outline"
//         className="border-green-500 text-green-500 capitalize"
//       >
//         {getSaleStatus(saleStatus)}
//       </Badge>
//     ) : (
//       <Badge
//         variant="outline"
//         className="border-red-500 text-red-500 capitalize"
//       >
//         {getSaleStatus(saleStatus)}
//       </Badge>
//     )}
//   </TableCell>
// );

export const TableCellWithBadge: React.FC<TableCellWithBadgeProps> = ({ saleStatus }) => {
  let badgeClass = "";
  switch (saleStatus) {
    case 0: // Pendiente
      badgeClass = "border-yellow-500 text-yellow-500";
      break;
    case 1: // En Proceso
      badgeClass = "border-blue-500 text-blue-500";
      break;
    case 2: // Completado
      badgeClass = "border-green-500 text-green-500";
      break;
    default:
      badgeClass = "border-gray-500 text-gray-500";
      break;
  }

  return (
    <TableCell>
      <Badge variant="outline" className={`${badgeClass} capitalize`}>
        {getSaleStatus(saleStatus)}
      </Badge>
    </TableCell>
  );
};