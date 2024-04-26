import { useTitle } from "@/hooks/useTitle";
import { Button } from "@/components/ui/button";
import { DateRange } from 'react-day-picker';
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "@/components/ui/search";
import { useState } from "react";
import { SalesList } from "../components/SalesList";
import { sales } from "../components/management/data";
import { PRODUCT, SERVICE } from "../config";
import { useNavigate } from "react-router-dom";

interface Sale {
  sale_date: string;
  // otras propiedades de la venta
}

export function Sales() {
  const navigate = useNavigate();
  useTitle("Ventas");
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(PRODUCT);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange | undefined>();

  const handleDateChange = (dateRange: DateRange | undefined) => {
    setSelectedDateRange(dateRange);
    // Aquí puedes manejar el nuevo rango de fechas seleccionado
    // Por ejemplo, podrías hacer una solicitud a una API para obtener ventas en este rango de fechas
  };


  const filteredSales = sales.filter(sale => {
    return activeTab === PRODUCT
      ? sale.items.some(item => item.type === 'product')
      : sale.items.some(item => item.type === 'service');
  });

  const handleExport = () => {
    /*Esto manda al usuario al page PDFPreview */
    navigate("/exportar");
  };
  
  return (
    <>
      <h3 className="text-3xl font-bold mb-8">Historial de ventas</h3>
      <div className="2xl:flex justify-between mb-8 gap-4">
        <div className="flex justify-between xl:justify-start xl:gap-5">
          <Search icon={"Search"} setSearch={setSearch} />
        </div>
        <div className="flex flex-col 2xl:flex-row gap-5">
          <DatePickerWithRange className="w-80" onChange={handleDateChange}/>
          <Button onClick={handleExport} className="w-48">Exportar</Button>
        </div>
      </div>
      <SalesList sales={sales} isLoading={isLoading} dateRange={selectedDateRange} />
    </>
  );
}