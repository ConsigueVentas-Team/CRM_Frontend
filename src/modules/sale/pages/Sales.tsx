import { useTitle } from "@/hooks/useTitle";
import { Button } from "@/components/ui/button";
import { Search } from "@/modules/sale/components/ui/search";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SaleCard } from "../components/SaleCard";
export function Sales() {
  useTitle("Ventas");

  return (
    <>
      <h3 className="text-3xl font-bold mb-8">Historial de ventas</h3>
      <div className="2xl:flex justify-between mb-8 gap-4">
        <div className="flex justify-between xl:justify-start xl:gap-5">
          <Search />
        </div>
        <div>
          <Tabs defaultValue="Productos" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="Productos">Productos</TabsTrigger>
              <TabsTrigger value="Servicios">Servicios</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex flex-col 2xl:flex-row gap-5">
          <DatePickerWithRange className="w-80" />
          <Button className="w-48">Exportar</Button>
        </div>
      </div>
      <SaleCard/>
    </>
  );
}
