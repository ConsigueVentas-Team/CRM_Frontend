import { ClientActions } from "../components/ClientActions";
import { useTitle } from "@/hooks/useTitle";
import { ClientDataTable } from "../components/ClientDataTable";
import api from "@/services/api";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { set } from "date-fns";

export function Clients() {
  useTitle("Clientes");

  const [page, setPage] = useState(1);
  const [data, setData] = useState<any[]>([]);

  const {
    data: clients,
    refetch,
    isLoading,
    isPreviousData,
  } = useQuery(
    ["clients", page],
    async () => {
      const { data } = await api.get(`/clients?page=${page}`);
      return { results: data.results, count: data.count };
    },
    { keepPreviousData: true }
  );

  useEffect(() => {
    if (clients && !isPreviousData) {
      setData((prevData) => [...prevData, ...clients.results]);
      console.log(clients);
    }
  }, [isPreviousData, clients]);

  return (
    <section className="py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Clientes</h3>
      <div className="flex gap-4">
        <ClientActions refetchClients={refetch} />
      </div>
      <div>
        <ClientDataTable
          data={clients?.results ? clients.results : []}
          count={clients?.count ? clients.count : 1}
          isLoading={isLoading}
          setPage={setPage}
          page={page}
        />
      </div>
    </section>
  );
}
