import { useTitle } from "@/hooks/useTitle";
import { useState, useEffect } from "react";
import { CategoriaDetail } from "@/types/auth";
import { CategoriaActions } from "../components/CategoriaActions";
import { CategoriaDataTable } from "../components/CategoriaDataTable";
import axios from "axios";
import { errorUtil } from "node_modules/zod/lib/helpers/errorUtil";
import api from "@/services/api";
import { fetchCategorias } from "../api/apiService";


const initialCategorias: CategoriaDetail[] = [];

export function Categorias() {
  useTitle("Categorías");

  const [categorias, setCategorias] = useState<CategoriaDetail[]>(initialCategorias);
  

  useEffect(() => {
    // Fetch categories from the API when the component mounts
    const fetchData = async () => {
      try {
        const categoriasData = await fetchCategorias();
        setCategorias(categoriasData);
      } catch (error) {
        console.error('Error fetching categorias:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  const handleCategoriaUpdate = (updatedCategoria: CategoriaDetail) => {
    const updatedCategorias = categorias.map((categoria) =>
      categoria.id === updatedCategoria.id ? updatedCategoria : categoria
    );
    setCategorias(updatedCategorias);
  };

  const handleCategoriaDelete = async (categoriaId: number) => {
    try {
      // Delete the category from the API
      await axios.delete(`http://localhost:8080/categorias/eliminar/${categoriaId}`);

      // Update the state after successful deletion
      const updatedCategorias = categorias.filter((categoria) => categoria.id !== categoriaId);
      setCategorias(updatedCategorias);
    } catch (error) {
      console.error('Error deleting categoria:', error);
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
            data={categorias}
            onCategoriaUpdate={handleCategoriaUpdate}
            onCategoriaDelete={handleCategoriaDelete}
          />
        </div>
      </section>
    </div>
  );
}