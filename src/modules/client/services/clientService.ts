import api from "@/services/api";
import { toast } from "@/hooks/useToast";

export const createClient = async (values: any) => {
  try {
    const result = await api.post("/clients/create", values);
    if (result.status >= 400) {
      throw new Error("Error al crear nuevo cliente");
    } else {
      return result.data; // O cualquier otra información que necesites retornar
    }
  } catch (error) {
    throw new Error("Error al crear nuevo cliente");
  }
};

export const updateClient = async (clientId: string, values: any) => {
  try {
    const { status } = await api.patch(`/clients/update/${clientId}`, values);
    if (status === 200) {
      toast({ title: "Cliente editado" });
    } else {
      toast({ title: "Error al editar cliente", variant: "destructive" });
    }
  } catch (error) {
    toast({ title: "Error al editar cliente", variant: "destructive" });
  }
};
