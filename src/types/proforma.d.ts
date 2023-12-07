interface ProformaTable{
    id: number;
    numero_proforma: string;
    referencia: string;
    fecha: string;
    total: number;
    empresa: string;
}

interface Proforma {
    proforma_id: number;
    numero_proforma: string;
    fecha: string;
    referencia: string;
    elaborado_por: string;
    aprobado_por: string;
    email: string;
    cell: string;
}

interface Empresa{
    empresa_id: number;
    razon_social: string;
    ruc: string;
    cell: string;
    email: string;
    web: string;
    oficina: string;
    portafolio: string;
}

interface Caracteristica{
    caracteristica_id: number;
    detalle_servicio_id: number;
    paquete_1: string;
    paquete_2: string;
    paquete_3: string;
    proforma_id: number;
}   

interface DetalleServicio {
    detalle_servicio_id: number;
    name: string;
    item:number;
    detalle: string;
    descripcion: string;
}

interface Precio{
    precio_id: number;
    proforma_id: number;
    inversion: string;
    paquete: number;
    precio: number;
    nota: string;
}

interface CondicionesPago {
    condiciones_id: number;
    proforma_id: number;
    descripcion: string;
    depositos: string;
    a_nombre: string;
    cuenta: string;
    cci: string;
}

interface Proyecto{
    proyecto_id: number;
    proforma_id: number;
    name: string;
    personal: string;
    tiempo_trabajo: string;
}

interface Observaciones{
    observaciones_id: number;
    proforma_id: number;
    descripcion: string;
}