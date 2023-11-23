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
      factura.fechaEmision,
      factura.serie,
      factura.numero,
      factura.ruc,
      factura.razSocial,
      factura.direccion,
      factura.descripcion,
      factura.monto,
      factura.moneda,
      factura.estado,
    ]);

    (pdf as any).autoTable({
      head: [['FECHA DE EMISIÓN', 'SERIE', 'NÚMERO', 'RUC', 'RAZÓN SOCIAL', 'DIRECCIÓN', 'DESCRIPCIÓN', 'MONTO', 'MONEDA', 'ESTADO']],
      body: rows as any[],
      startY: 30,
      styles: {
        fontSize: 8, // Set the font size to 8
        textColor: [0, 0, 0], // Set text color to black (RGB)
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
