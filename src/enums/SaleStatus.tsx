// Estados de codigo /module colletions   
export const getSaleStatus = (saleStatus: number): string => {
    switch (saleStatus) {
      case 1:
        return "Activo";
      case 2:
        return "Inactivo";
      default:
        return "Desconocido";
    }
  };