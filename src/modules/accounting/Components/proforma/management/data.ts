const proforma = {
  invoice_number: "Número de factura",
  date: "2023-12-14",
  reference: "Referencia",
  prepared_by: "Preparado por",
  required_by: "Requerido por",
  approved_by: "Aprobado por",
  email: "correo@proforma.com",
  phone_number: "Número de teléfono de la proforma",
  work_time: "Horario de trabajo",
  company: 1,
  observations: [
    {
      description: "Descripción de la observación 1",
    },
    {
      description: "Descripción de la observación 2",
    },
    // Puedes agregar más observaciones si es necesario
  ],
  package: [
    {
      name: "Paquete 1",
      price: 100.0,
      note_price: "Nota para el precio",
      package_items: [
        {
          value: "Valor del paquete 1",
          item_id: 1,
        },
        // Puedes agregar más items del paquete si es necesario
      ],
    },
    // Puedes agregar más package del paquete si es necesario
  ],
  personal_proyecto: [
    {
      employee_id: 1,
    },
    // Puedes agregar más empleados si es necesario
  ],
};
