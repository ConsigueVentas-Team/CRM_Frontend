import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ProformaDataTable } from "../Components/proforma/ProformaDataTable";
import { useState, useEffect } from "react";
import { useTitle } from "@/hooks/useTitle";
import { fetchProformas } from "@/hooks/useProforma";

export function Proforma() {
  useTitle("Proforma");

  const [data, setData] = useState<ProformaTable[]>([
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const proformasData = await fetchProformas();
        setData(proformasData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Proformas</h3>
      <div className="flex gap-4">
        <Link className="flex gap-4 items-center" to="/proforma/create">
          <Button className="flex gap-2">
            Crear Proforma <MoveRight />
          </Button>
        </Link>
      </div>
      <div>
        <ProformaDataTable data={data} />
      </div>
    </section>
  );
}
