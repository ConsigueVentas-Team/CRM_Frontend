import { useTitle } from "@/hooks/useTitle";
import { useEffect, useState } from "react";
import { CategoriaDetail } from "@/types/auth";
import { CategoriaActions } from "../components/category/CategoryActions";
import { CategoriaDataTable } from "../components/category/CategoryDataTable";
import api from "@/services/api";
import { useInfiniteQuery, UseInfiniteQueryResult } from "react-query";

const PAGE_SIZE = 10;

export function Categorias() {
  useTitle("Categorías");
  const [currentPage, setCurrentPage] = useState(1);
  const [categorias, setCategorias] = useState<CategoriaDetail[]>([]);
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<
    CategoriaDetail,
    Error
  >(
    "categoria",
    ({ pageParam = 1 }) =>
      api
        .get(`/categories?page=${pageParam}`)
        .then((response) => response.data),
    {
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.next
          ? new URL(lastPage.next).searchParams.get("page")
          : null;
        return nextPage;
      },
    }
  ) as UseInfiniteQueryResult<CategoriaDetail, Error>;

  useEffect(() => {
    if (data && data.pages) {
      // Concatenamos las categorías de todas las páginas
      const newCategorias = data.pages.flatMap((page) => page.results);

      // Si no hay categorías, no hay necesidad de actualizar el estado
      if (newCategorias.length === 0) {
        return;
      }

      // Si hay una página siguiente, actualizamos el estado con las nuevas categorías
      if (hasNextPage) {
        setCategorias((prevCategorias) => [
          ...prevCategorias,
          ...newCategorias,
        ]);
      } else {
        // Si no hay página siguiente, simplemente reemplazamos las categorías existentes
        setCategorias(newCategorias);
      }
    }
  }, [data, hasNextPage]);

  const handleFetchNextPage = () => {
    console.log("Fetching next page...");
    fetchNextPage();
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const fetchPreviousPage = () => {
    if (currentPage > 1) {
      // Calcula el índice principal y final para obtener los datos de la página anterior
      const endIndex = (currentPage - 1) * PAGE_SIZE;
      const startIndex = endIndex - PAGE_SIZE;

      // Actualiza el estado con el slice correspondiente
      setCategorias((prevCategorias) => prevCategorias.slice(startIndex, endIndex));

      // Actualiza el número de página actual
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  return (
    <div className="h-full">
      <section className="py-6 flex flex-col gap-8 h-full">
        <h3 className="text-3xl">Categorías</h3>
        <div className="flex gap-4 flex-1">
          <CategoriaActions setCategoria={setCategorias} />
        </div>

        <div className="h-full">
          <CategoriaDataTable
            data={categorias} // Pasa solo las categorías de la página actual
            onFetchNextPage={handleFetchNextPage}
            onFetchPreviousPage={fetchPreviousPage}
            hasNextPage={hasNextPage}
            hasPreviousPage={currentPage > 1}
          />
        </div>
      </section>
    </div>
  );
}
