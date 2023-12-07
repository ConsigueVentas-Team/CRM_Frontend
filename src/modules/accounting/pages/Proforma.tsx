import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ProformaDataTable } from "../Components/proforma/ProformaDataTable";
import { useState } from "react";
import { useTitle } from "@/hooks/useTitle";

export function Proforma() {
  useTitle("Proforma");
  const [data, setData] = useState<ProformaTable[]>([
    {
      id: 1,
      numero_proforma: "0001",
      referencia: "Razon Social",
      fecha: "2021-07-01",
      total: 10000,
      empresa: "Empresa 1",
    },
    {
      id: 2,
      numero_proforma: "0002",
      referencia: "Razon Social",
      fecha: "2021-07-01",
      total: 20000,
      empresa: "Empresa 2",
    },
    {
      id: 3,
      numero_proforma: "0003",
      referencia: "Razon Social",
      fecha: "2021-07-01",
      total: 30000,
      empresa: "Empresa 3",
    }
  ]);

  return (
    <section className="py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Proformas</h3>
      <div className="flex gap-4">
        <Button>
            <Link className="flex gap-4 items-center" to="/proforma/create">Crear Proforma <MoveRight/></Link>
        </Button>
      </div>
      <div>
        <ProformaDataTable data={data}/>
      </div>
    </section>
  );
}
