import { useTitle } from "@/hooks/useTitle";
import { useState } from "react";
import { CategoriaDetail } from "@/types/auth";
import { CategoriaActions } from "../components/category/CategoryActions";
import { CategoriaDataTable } from "../components/category/CategoryDataTable";
import api from "@/services/api";
import { useQuery } from "react-query";

const initialCategorias: CategoriaDetail[] = [];

export function Categorias() {
  useTitle("Categorías");

  const [categorias, setCategorias] =
    useState<CategoriaDetail[]>(initialCategorias);

  useQuery("categoria", async () => {
    const response = await api.get("/categories");
    setCategorias(response.data.results);
  });

  return (
    <div className="h-full">
      <section className="py-6 flex flex-col gap-8 h-full">
        <h3 className="text-3xl">Categorías</h3>
        <div className="flex gap-4 flex-1">
          <CategoriaActions setCategoria={setCategorias} />
        </div>

        <div className="h-full">
          <CategoriaDataTable data={categorias} />
        </div>
      </section>
    </div>
  );
}
