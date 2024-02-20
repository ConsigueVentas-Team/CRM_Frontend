import { ClientActions } from "../components/ClientActions";
import { useTitle } from "@/hooks/useTitle";
import { ClientDataTable } from "../components/ClientDataTable";
import api from "@/services/api";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { ClientDetail } from "../components/ClientDetail";

export function Clients() {
  useTitle("Clientes");

  const [page, setPage] = useState(1);
  const [data, setData] = useState<(typeof ClientDetail)[]>([]);

  const fetchClients = async (page: number) => {
    const { data } = await api.get(`/clients?page=${page}`);
    return {
      results: data.results,
      count: data.count,
    };
  };

  const {
    data: clients,
    isLoading,
    isPreviousData,
  } = useQuery(["clients", page], () => fetchClients(page), {
    keepPreviousData: true,
  });

  const nextPage = () => {
    if (!isPreviousData && clients && data.length < clients.count) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    if (clients && !isPreviousData && data.length < clients.count) {
      setData((prevData) => [...prevData, ...clients.results]);
    }
  }, [isPreviousData, clients]);

  return (
    <section className="py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Clientes</h3>
      <div className="flex gap-4">
        <ClientActions />
      </div>
      <div>
        <ClientDataTable
          data={data ? data : []}
          count={clients?.count ? clients.count : 0}
          isLoading={isLoading}
          setPage={nextPage}
          page={page}
        />
      </div>
    </section>
  );
}
