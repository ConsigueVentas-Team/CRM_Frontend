import { useTitle } from "@/hooks/useTitle";
import { Button } from "@/components/ui/button";
import { DateRange } from 'react-day-picker';
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { useState } from "react";
import { SalesList } from "../components/SalesList";
import { useSales } from '../hooks/useSales';
import { CustomerSearch } from "../components/CustomerSearch";

export function Sales() {
  useTitle("Ventas");
  const [search, setSearch] = useState("");
  const { data: sales, isLoading } = useSales( search );
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange | undefined>();

  const handleDateChange = (dateRange: DateRange | undefined) => {
    setSelectedDateRange(dateRange);
  };

  const handleExport = () => {
    /*Esto manda al usuario al page PDFPreview */
    window.open("/exportar", "_blank");
  };
  return (
    <>
      <h3 className="text-3xl font-bold mb-8">Historial de ventas</h3>
      <div className="flex flex-col lg:flex-row justify-between mb-6">
        <div className="w-80">
          <CustomerSearch setSearch={setSearch} />
        </div>
        <div className="mt-4 lg:mt-0 lg:ml-2">
          <DatePickerWithRange className="w-80" onChange={handleDateChange}/>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button onClick={handleExport} className="w-48">Exportar</Button>
        </div>
      </div>
      <SalesList data={sales} isLoading={isLoading} dateRange={selectedDateRange} />
    </>
  );
}