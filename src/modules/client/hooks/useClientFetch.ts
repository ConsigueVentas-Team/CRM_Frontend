import { ClientDetail } from "@/types/auth";
import { useInfiniteQuery } from "react-query";
import { fetchClients } from "../services/clientService";

export const useClientsFetch = () => {
    const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } =
      useInfiniteQuery<{ next?: string; clients: ClientDetail[]; count: number }>(
        ["clients"],
        fetchClients,
        {
          getNextPageParam: (lastPage) => {
            if (lastPage.next) {
              const url = new URL(lastPage.next);
              const pageParam = url.searchParams.get("page");
              return pageParam ? parseInt(pageParam, 10) : undefined;
            }
            return undefined;
          },
        }
      );
  
    return {
      isLoading,
      isError,
      clients: data?.pages.flatMap((map) => map.clients) ?? [],
      count: data?.pages[0]?.count ?? 0,
      refetch,
      fetchNextPage,
      hasNextPage,
    };
  };
