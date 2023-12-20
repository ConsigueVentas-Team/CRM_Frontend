// PDFExportButton.tsx
import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Button } from "@/components/ui/button";
import { DownloadCloud } from "lucide-react";
import { Bill } from '@/types/bill';

interface PDFExportButtonProps {
  data: Bill[];
}

const PDFExportButton: React.FC<PDFExportButtonProps> = ({ data }) => {
  const exportToPDF = () => {
    const pdf = new jsPDF();
    pdf.text('Lista de Facturas', 20, 20);

    const rows = data.map(factura => [
      factura.date_of_issue,
      factura.serie,
      factura.number,
      factura.ruc,
      factura.business_name,
      factura.address,
      factura.description,
      factura.amount,
      factura.money,
      factura.status,
    ]);

    (pdf as any).autoTable({
      head: [['FECHA DE EMISIÓN', 'SERIE', 'NÚMERO', 'RUC', 'RAZÓN SOCIAL', 'DIRECCIÓN', 'DESCRIPCIÓN', 'MONTO', 'MONEDA', 'ESTADO']],
      body: rows as any[],
      startY: 30,
      styles: {
        fontSize: 8,
        textColor: [0, 0, 0],
      },
    });

    pdf.save('facturas.pdf');
  };

  return (
    <Button onClick={exportToPDF} className="p-5 shadow-lg">
         <DownloadCloud className="mr-2" /> Exportar Tabla
    </Button>
  );
};

export default PDFExportButton;
