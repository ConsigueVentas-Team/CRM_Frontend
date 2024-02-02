import { ClientActions } from "../components/ClientActions";
import { useTitle } from "@/hooks/useTitle";
import { ClientDataTable } from "../components/ClientDataTable";
import api from "@/services/api";
import { useQuery } from "react-query";
import { useState } from "react";

export function Clients() {
  useTitle("Clientes");

  const [page, setPage] = useState(1);

  const { data: clients, refetch, isLoading } = useQuery(['clients', page], async () => {
    const { data } = await api.get(`/clients?page=${page}`);
    return data.results;
  });

  return (
    <section className="py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Clientes</h3>
      <div className="flex gap-4">
        <ClientActions refetchClients={refetch} />
      </div>
      <div>
        <ClientDataTable data={clients ? clients: []} isLoading={isLoading} setPage={setPage}/>
      </div>
    </section>
  );
}
