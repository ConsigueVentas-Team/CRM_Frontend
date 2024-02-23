import { useMutation, useQueryClient } from "react-query";
import api from "@/services/api";
import { toast } from "@/hooks/useToast";
import { ClientSchema } from "@/lib/validators/client";

export const useEditClient = () => {
  const queryClient = useQueryClient();

  const editClientMutation = () =>
    useMutation(
      async (data: { clientId: string | undefined; values: any }) => {
        const { clientId, values } = data;
        const { status } = await api.patch(
          `/clients/update/${clientId}`,
          values
        );

        if (status === 200) {
          toast({ title: "Cliente editado" });
        } else {
          toast({ title: "Error al editar cliente", variant: "destructive" });
        }
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("clients");
        },
      }
    );

  return {
    editClientMutation,
  };
};
