import { useTitle } from "@/hooks/useTitle";
import { CategoriaActions } from "../components/category/CategoryActions";
import { CategoriaDataTable } from "../components/category/CategoryDataTable";
import api from "@/services/api";
import { useQuery } from "react-query";

const getCategories = async () => {
  const { data } = await api.get("/categories");
  return data;
};

export function Categorias() {
  useTitle("Categorías");
  const { data: categories, isLoading } = useQuery("categoria", getCategories);

  return (
    <div className="h-full">
      <section className="py-6 flex flex-col gap-8 h-full">
        <h3 className="text-3xl">Categorías</h3>
        <div className="flex gap-4 flex-1">
          <CategoriaActions />
        </div>

        <div className="h-full">
          <CategoriaDataTable
            data={categories ? categories : []}
            isLoading={isLoading}
          />
        </div>
      </section>
    </div>
  );
}
