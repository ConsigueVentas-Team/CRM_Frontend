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
      birthdate,
      email,
      gender,
      phone,
      address,
      postal_code,
      province,
      district,
      country,
      active,
      image,
    }: {
      name?: string;
      lastname?: string;
      document_type?: number;
      document_number?: string;
      birthdate?: string;
      email?: string;
      gender?: number;
      phone?: string;
      address?: string;
      postal_code?: string;
      province?: string;
      district?: string;
      country?: string;
      active?: boolean;
      image?: File | string;
    }
  ) => {
    return useMutation(
      () =>
        updateClient(clientId, {
          name,
          lastname,
          document_type,
          document_number,
          birthdate,
          email,
          gender,
          phone,
          address,
          postal_code,
          province,
          district,
          country,
          active,
          image,
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
