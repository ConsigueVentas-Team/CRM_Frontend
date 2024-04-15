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
      document_type,
      document_number,
      address,
      phone,
      email,
      active,
    }: {
      name?: string;
      lastname?: string;
      document_type?: number;
      document_number?: string;
      address?: string;
      phone?: string;
      email?: string;
      active?: boolean;
    }
  ) => {
    return useMutation(
      () =>
        updateClient(clientId, {
          name,
          lastname,
          document_type,
          document_number,
          address,
          phone,
          email,
          active,
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
