import { ClientActions } from "../components/ClientActions";
import { useTitle } from "@/hooks/useTitle";
import { ClientDataTable } from "../components/ClientDataTable";
import api from "@/services/api";
import { useQuery, useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import { ClientDetail } from "../components/ClientDetail";

async function getClients(page = 0) {
  const { data } = await api.get(`/clients?page=${page}`);
  return data.results;
}

export function Clients() {
  useTitle("Clientes");
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [data, setData] = useState<(typeof ClientDetail)[]>([]);

  const {
    status,
    data: clients,
    error,
    isFetching,
    isPreviousData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["clients", page],
    queryFn: () => getClients(page),
    keepPreviousData: true,
    staleTime: 5000,
  });

  useEffect(() => {
    if (clients && !isPreviousData && data.length < clients.count) {
      queryClient.prefetchQuery({
        queryKey: ["clients", page + 1],
        queryFn: () => getClients(page + 1),
      });
    }
  }, [data, isPreviousData, page, queryClient]);

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  const handleNext = () => setPage((prevPage) => prevPage + 1);
  const handlePrevious = () => setPage((prevPage) => prevPage - 1);

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
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      </div>
    </section>
  );
}
