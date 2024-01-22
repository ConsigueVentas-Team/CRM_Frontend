import { ClientActions } from "../components/ClientActions";
import { useTitle } from "@/hooks/useTitle";
import { useState } from "react";
import { ClientDetail } from "@/types/auth";
import { ClientDataTable } from "../components/ClientDataTable";
import api from "@/services/api";
import { useQuery } from "react-query";

export function Clients() {
  useTitle("Clientes");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLaoding, setIsLoading] = useState(false);
  const [clients, setClients] = useState<ClientDetail[]>([]);

  useQuery('clients', async () => {
    const response = await api.get('/clients');
    setClients(response.data);
  });

  return (
    <section className="py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Clientes</h3>
      <div className="flex gap-4">
        <ClientActions setClients={setClients} />
      </div>
      <div>
        <ClientDataTable data={clients} />
      </div>
    </section>
  );
}
