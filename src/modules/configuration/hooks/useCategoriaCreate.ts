import { useMutation, useQueryClient } from "react-query";
import { createCategoria } from "../services/categoryService";

export const useCategoriaCreate = () => {
    const queryClient = useQueryClient();
  
    const createCategoriaMutation = () => {
      return useMutation(
        createCategoria,
        {
          onSuccess: () => {
            queryClient.invalidateQueries("categoria");
          },
          onError: (error: any) => {
            // Aquí puedes manejar errores específicos de la creación si es necesario
            console.error("Error en la creación de la categoría:", error);
          },
        }
      );
    };
  
    return { createCategoriaMutation };
  };