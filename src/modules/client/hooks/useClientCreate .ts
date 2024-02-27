import { useMutation, useQueryClient } from "react-query";
import { createClient } from "../services/clientService";

export const useClientCreate = () => {
  const queryClient = useQueryClient();

  const createClientMutation = () => {
    return useMutation(createClient, {
      onSuccess: () => {
        queryClient.invalidateQueries("clients");
      },
      onError: (error: any) => {
        console.error("Error en la creación del cliente:", error);
      },
    });
  };

  return { createClientMutation };
};
