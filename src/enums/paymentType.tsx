
export const getPaymentType = (paymentType: number): string => {
    switch (paymentType) {
      case 0:
        return "Tarjeta de Crédito";
      case 1:
        return "Tarjeta de Débito";
      case 2:
        return "Efectivo";
      case 3:
        return "Trasferencia Bancaria";
      case 4:
        return "Otro";
      default:
        return "Desconocido";
    }
  };


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