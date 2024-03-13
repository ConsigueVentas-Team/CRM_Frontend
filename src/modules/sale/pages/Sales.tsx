import { useTitle } from "@/hooks/useTitle";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "@/components/ui/search";
import { useState } from "react";
import { SalesList } from "../components/SalesList";
import { sales } from "../components/management/data";
import { PRODUCT, SERVICE } from "../config";

export function Sales() {
  useTitle("Ventas");
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(PRODUCT);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <h3 className="text-3xl font-bold mb-8">Historial de ventas</h3>
      <div className="2xl:flex justify-between mb-8 gap-4">
        <div className="flex justify-between xl:justify-start xl:gap-5">
          <Search icon={"Search"} setSearch={setSearch} />
        </div>
        <div>
          <Tabs defaultValue={PRODUCT} className="w-[400px]">
            <TabsList>
              <TabsTrigger
                value={PRODUCT}
                onClick={() => setActiveTab(PRODUCT)}
              >
                {PRODUCT}
              </TabsTrigger>
              <TabsTrigger
                value={SERVICE}
                onClick={() => setActiveTab(SERVICE)}
              >
                {SERVICE}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex flex-col 2xl:flex-row gap-5">
          <DatePickerWithRange className="w-80" />
          <Button className="w-48">Exportar</Button>
        </div>
      </div>
      <SalesList sales={sales} saleType={activeTab} isLoading={isLoading} />
    </>
  );
}
