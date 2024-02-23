// categoriaService.ts
import api from "@/services/api";

export const createCategoria = async (values: any) => {
  try {
    const response = await api.post("/categories/create", values);

    if (response.status === 201) {
      return true;
    } else {
      console.error(
        "Error al crear la categoría. Estado de respuesta:",
        response.status
      );
      return false;
    }
  } catch (error: any) {
    console.error("Error general:", error);

    if (error.response && error.response.status === 400) {
      console.log(
        "La categoría ya existe. Estado de respuesta:",
        error.response.status
      );

      throw new Error("La categoría ya existe. Por favor, elige otro nombre.");
    } else if (error.response) {
      console.error("Error en la respuesta del servidor:", error.response.data);
      throw new Error("Error en la respuesta del servidor");
    } else if (error.request) {
      console.error("No se recibió respuesta del servidor:", error.request);
      throw new Error("No se recibió respuesta del servidor");
    } else {
      console.error(
        "Error durante la configuración de la solicitud:",
        error.message
      );
      throw new Error("Error durante la configuración de la solicitud");
    }
  }
};

export const updateCategoria = async (
  categoryId: number,
  {
    name,
    description,
    color,
  }: { name: string; description: string; color: number }
) => {
  try {
    const response = await api.put(`/categories/update/${categoryId}`, {
      name,
      description,
      color,
    });

    if (response.status === 200) {
      return true;
    } else {
      console.error(
        "Error al actualizar la categoría. Estado de respuesta:",
        response.status
      );
      return false;
    }
  } catch (error: any) {
    console.error("Error general:", error);
    throw new Error("Error al actualizar la categoría");
  }
};
