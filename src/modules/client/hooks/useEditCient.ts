import { useMutation, useQueryClient } from "react-query";
import api from "@/services/api";
import { toast } from "@/hooks/useToast";
import { ClientSchema } from "@/lib/validators/client";
import { updateClient } from "../services/clientService";

export const useEditClient = () => {
  const queryClient = useQueryClient();

  const editClient = (
    clientId: any,
    {
      name,
      lastname,
      documentType,
      documentNumber,
      address,
      cellNumber,
      email,
      state,
    }: {
      name?: string;
      lastname?: string;
      documentType?: number;
      documentNumber?: string;
      address?: string;
      cellNumber?: string;
      email?: string;
      state?: boolean;
    }
  ) => {
    return useMutation(
      () =>
        updateClient(clientId, {
          name,
          lastname,
          documentType,
          documentNumber,
          address,
          cellNumber,
          email,
          state,
        }),

      {
        onSuccess: () => {
          queryClient.invalidateQueries("clients");
        },
      }
    );
  };

  return {
    editClient,
  };
};
