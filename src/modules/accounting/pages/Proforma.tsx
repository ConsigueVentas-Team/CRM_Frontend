import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ProformaDataTable } from "../Components/proforma/ProformaDataTable";
import { useTitle } from "@/hooks/useTitle";
import { useQuery } from "react-query";
import api from "@/services/api";

export function Proforma() {
  useTitle("Proforma");

  const { data, isLoading, isError, error } = useQuery(
    ["proformas"],
    async () => {
      const response = await api.get("/proformas");
      return response?.data ?? [];
    }
  );

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
        <ProformaDataTable data={data} isLoading={isLoading} />
      </div>
    </section>
  );
}
