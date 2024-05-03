import { useTitle } from "@/hooks/useTitle";
import { Button } from "@/components/ui/button";
import { DateRange } from 'react-day-picker';
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { Search } from "@/components/ui/search";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SalesList } from "../components/SalesList";
import api from "@/services/api";
import { useQuery } from "react-query";


const getSales = async () => {
    const { data } = await api.get("/sales");
    return data;
};

export function Sales() {
  const navigate = useNavigate();
  useTitle("Ventas");
  const { data: sales, isLoading } = useQuery("sales", getSales);
  const [search, setSearch] = useState("");
  
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange | undefined>();

  const handleDateChange = (dateRange: DateRange | undefined) => {
    setSelectedDateRange(dateRange);
  };

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
      <SalesList data={sales} isLoading={isLoading} dateRange={selectedDateRange} />
    </>
  );
}