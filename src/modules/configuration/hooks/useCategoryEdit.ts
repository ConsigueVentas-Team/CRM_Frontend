import { useMutation, useQueryClient } from "react-query";
import { updateCategoria } from "../services/categoryService";



export const useCategoriaEdit = () => {
  const queryClient = useQueryClient();

  const editCategoria = (
    categoryId: number,
    { name, description, color, type_category }: { name: string; description: string; color: number; type_category:number }
  ) => {
    return useMutation(
      () => updateCategoria(categoryId, { name, description, color, type_category }),
      {
        onSuccess: () => {
          queryClient.invalidateQueries("categoria");
        },
      }
    );
  };

  return { editCategoria };
};