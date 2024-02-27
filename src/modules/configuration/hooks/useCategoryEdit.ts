import { useMutation, useQueryClient } from "react-query";
import { updateCategoria } from "../services/categoryService";



export const useCategoriaEdit = () => {
  const queryClient = useQueryClient();

  const editCategoria = (
    categoryId: number,
    { name, description, color }: { name: string; description: string; color: number }
  ) => {
    return useMutation(
      () => updateCategoria(categoryId, { name, description, color }),
      {
        onSuccess: () => {
          queryClient.invalidateQueries("categoria");
        },
      }
    );
  };

  return { editCategoria };
};