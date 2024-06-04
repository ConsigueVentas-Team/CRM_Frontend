export const getProductStatus = (productStatus: number): string => {
    switch (productStatus) {
      case 0:
        return "Desactivado";
      case 1:
        return "Activo";
      default:
        return "Desconocido";
    }
  };
  