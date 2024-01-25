import { ClientActions } from "../components/ClientActions";
import { useTitle } from "@/hooks/useTitle";
import { useEffect, useState } from "react";
import { ClientDetail } from "@/types/auth";
import { ClientDataTable } from "../components/ClientDataTable";
import api from "@/services/api";
import { useQuery } from "react-query";

export function Clients() {
  useTitle("Clientes");

  const { data: clientsFromQuery, refetch } = useQuery('clients', async () => {
    const response = await api.get('/clients');
    return response.data;
  });

  const [clients, setClients] = useState<ClientDetail[]>(clientsFromQuery || []);

  useEffect(() => {
    setClients(clientsFromQuery || []);
  }, [clientsFromQuery]);

  return (
    <section className="py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Clientes</h3>
      <div className="flex gap-4">
        <ClientActions refetchClients={refetch} />
      </div>
      <div>
        <ClientDataTable data={clients} refetchClients={refetch} />
      </div>
    </section>
  );
}
