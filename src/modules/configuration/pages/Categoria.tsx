import { useTitle } from "@/hooks/useTitle";
import { useState } from "react";
import { CategoriaDetail } from "@/types/auth";
import { CategoriaActions } from "../components/CategoriaActions";
import { CategoriaDataTable } from "../components/CategoriaDataTable";

const initialCategorias: CategoriaDetail[] | (() => CategoriaDetail[]) = [

];

export function Categorias() {
    useTitle("Categorías");
  
    const [categorias, setCategorias] = useState<CategoriaDetail[]>(initialCategorias);
  
    const handleCategoriaUpdate = (updatedCategoria: CategoriaDetail) => {
      // Actualizar la categoría en el estado
      const updatedCategorias = categorias.map((categoria) =>
        categoria.id === updatedCategoria.id ? updatedCategoria : categoria
      );
      setCategorias(updatedCategorias);
    };
  
    const handleCategoriaDelete = (categoriaId: number) => {
      // Eliminar la categoría del estado
      const updatedCategorias = categorias.filter((categoria) => categoria.id !== categoriaId);
      setCategorias(updatedCategorias);
    };
  
    return (
      <div className="h-full"> {/* Asegura que ocupe toda la altura disponible */}
        <section className="py-6 flex flex-col gap-8 h-full"> {/* Asegura que ocupe toda la altura disponible */}
          <h3 className="text-3xl">Categorías</h3>
          <div className="flex gap-4 flex-1"> {/* Utiliza flex-1 para que ocupe el espacio restante */}
            <CategoriaActions setCategoria={setCategorias} />
          </div>
          <div className="h-full"> {/* Asegura que ocupe toda la altura disponible */}
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