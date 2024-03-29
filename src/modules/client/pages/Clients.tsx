import { useTitle } from "@/hooks/useTitle";
import { useState } from "react";
import { useClientsFetch } from "../hooks/useClientFetch";
import { ClientActions } from "../components/ClientActions";
import { ClientDataTable } from "../components/ClientDataTable";

export function Clients() {
  useTitle("Clientes");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (newSearchQuery: any) => {
    setSearchQuery(newSearchQuery);
  };
  const { isLoading, isError, clients, fetchNextPage, hasNextPage, count } =
    useClientsFetch(searchQuery);
  const handleNextPage = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <section className="flex flex-col gap-8">
      <h3 className="text-3xl">Clientes</h3>
      <div className="flex gap-4">
        <ClientActions />
      </div>
      <div>
        <ClientDataTable
          data={clients}
          isLoading={isLoading}
          setPage={handleNextPage}
          count={count}
          onSearchChange={handleSearchChange}
        />
      </div>
    </section>
  );
}
