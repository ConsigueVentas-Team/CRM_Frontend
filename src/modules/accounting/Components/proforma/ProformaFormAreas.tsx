import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FormField } from "@/components/ui/form";
import {
  DetailCheckbox,
  DetailCheckboxGroup,
  DetailInput,
  DetailRadioGroup,
} from "./PackageDetail";
import { useFormContext } from "react-hook-form";

interface Props {
  form: any;
  packageIndex: string;
}

export function ProformaFormAreas({ form, packageIndex }: Props) {
  const { register } = useFormContext();
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>01. ESTRATEGIA</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.0.value`}
            render={({ field }) => (
              <DetailInput field={field} label="Embudo de Ventas" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.1.value`}
            render={({ field }) => (
              <DetailCheckbox field={field} label="Modelo Canvas" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.2.value`}
            render={({ field }) => (
              <DetailCheckbox field={field} label="Diagnóstico de la marca" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.3.value`}
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Analisis de la competencia"
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.4.value`}
            render={({ field }) => (
              <DetailCheckbox field={field} label="Creación de Cliente Ideal" />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>02. DISEÑO GRÁFICO</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.5.value`}
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Creacion o renovacion de logo (opcional)"
              />
            )}
          />

          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.6.value`}
            render={({ field }) => (
              <DetailCheckbox field={field} label="Creacion de Linea Grafica" />
            )}
          />

          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.7.value`}
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Creación de Manual de Marca"
              />
            )}
          />

          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.8.value`}
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Diseño de formato de post y historias"
              />
            )}
          />

          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.9.value`}
            render={({ field }) => (
              <DetailCheckbox field={field} label="Diseños adicionales" />
            )}
          />

          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.10.value`}
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Creacion de Historias destacadas"
              />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>03. CREACIÓN DE CONTENIDO</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.11.value`}
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label=" Estrategia Plan de contenido"
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.12.value`}
            render={({ field }) => (
              <DetailInput
                field={field}
                label="Cantidad de publicaciones"
                type="post"
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.13.value`}
            render={({ field }) => (
              <DetailCheckboxGroup
                form={form}
                field={field}
                label="Tipo de Formato"
                packageIndex={packageIndex}
                fieldIndex={13}
                list="contentTypeList"
              />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>04. GESTIÓN DE REDES</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.14.value`}
            render={({ field }) => (
              <DetailCheckboxGroup
                form={form}
                field={field}
                label="Cantidad de Redes sociales"
                packageIndex={packageIndex}
                fieldIndex={14}
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.15.value`}
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Reporte del estado actual de la marca"
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.16.value`}
            render={({ field }) => (
              <DetailCheckbox field={field} label="Monitoreo de la cuenta" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.17.value`}
            render={({ field }) => (
              <DetailCheckbox field={field} label="Estrategia orgánica" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.18.value`}
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Creacion u optimizacion de las redes sociales."
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.19.value`}
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Creacion de tarjeta digital"
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.20.value`}
            render={({ field }) => (
              <DetailCheckbox field={field} label="Reporte de métricas" />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>05. PRODUCCIÓN AUDIOVISUAL</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.21.value`}
            render={({ field }) => (
              <DetailInput
                field={field}
                label="Cantidad de Videos"
                type="video"
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.22.value`}
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Edición de Videos"
                warning="Todos los recursos entrega el cliente virtualmente"
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.23.value`}
            render={({ field }) => (
              <DetailCheckboxGroup
                form={form}
                field={field}
                label="Orientación"
                packageIndex={packageIndex}
                fieldIndex={23}
                list="orientationList"
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.24.value`}
            render={({ field }) => (
              <DetailCheckbox field={field} label="Cuña de apertura" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.25.value`}
            render={({ field }) => (
              <DetailCheckbox field={field} label="Cuña de Cierre" />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>06. VISITA PRESENCIAL</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.26.value`}
            render={({ field }) => (
              <DetailCheckbox field={field} label="Cantidad por mes" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.27.value`}
            render={({ field }) => (
              <DetailInput field={field} label="Tiempo en Horas" />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>07. PUBLICIDAD PAGADA</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.28.value`}
            render={({ field }) => (
              <DetailCheckbox field={field} label="Estrategia de Publicidad" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.29.value`}
            render={({ field }) => (
              <DetailCheckboxGroup
                form={form}
                field={field}
                label="Creación de Contenido para publicidad formato"
                packageIndex={packageIndex}
                fieldIndex={29}
                list="contentTypeList"
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.30.value`}
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Configuración de la cuenta de publicidad."
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.31.value`}
            render={({ field }) => (
              <DetailCheckboxGroup
                form={form}
                field={field}
                label="Canales de Publicidad"
                packageIndex={packageIndex}
                fieldIndex={31}
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.32.value`}
            render={({ field }) => (
              <DetailInput field={field} label="Número de Campañas" />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>08. WHATSAPP BUSINESS</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.33.value`}
            render={({ field }) => (
              <DetailCheckbox field={field} label="Configuración de whatsapp" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.34.value`}
            render={({ field }) => (
              <DetailInput
                field={field}
                label="Diseño de Catálogo para productos"
                type="product"
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.35.value`}
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Creación de Mensajes Personalizados"
              />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger>09. ATENCIÓN AL CLIENTE</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.36.value`}
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Propuesta de proceso de atención"
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.37.value`}
            render={({ field }) => (
              <DetailInput field={field} label="Horario de Atencion" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.38.value`}
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label=" Creacion de Mensajes Personalizados"
              />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-10">
        <AccordionTrigger>10. PÁGINA WEB</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.39.value`}
            render={({ field }) => (
              <DetailRadioGroup
                field={field}
                label="Tipo de Página Web"
                options="webTypeList"
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.40.value`}
            render={({ field }) => (
              <DetailRadioGroup
                field={field}
                label="Diseño Personalizado"
                options="webDesignList"
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.41.value`}
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Registro de Productos"
                warning="Max. 10"
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.42.value`}
            render={({ field }) => (
              <DetailCheckbox field={field} label="Seo On Page" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.43.value`}
            render={({ field }) => (
              <DetailCheckbox field={field} label="Blog" />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-11">
        <AccordionTrigger>11. EMBUDOS DE VENTAS</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.44.value`}
            render={({ field }) => (
              <DetailInput field={field} label="Propuesta Diseño de embudo" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.45.value`}
            render={({ field }) => (
              <DetailInput field={field} label="Tipo de Embudo" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.46.value`}
            render={({ field }) => (
              <DetailInput field={field} label="Desarrollo de Embudo" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.47.value`}
            render={({ field }) => (
              <DetailInput field={field} label="Emailing" />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-12">
        <AccordionTrigger>12. APLICACIÓN MÓVIL</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.48.value`}
            render={({ field }) => (
              <DetailInput field={field} label="Propuesta de Diseño Móvil" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.49.value`}
            render={({ field }) => (
              <DetailInput field={field} label="Desarrollo aplicativo" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.50.value`}
            render={({ field }) => (
              <DetailInput field={field} label="Implementacion Funcional" />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-13">
        <AccordionTrigger>13. GROWTH PARTNER</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.51.value`}
            render={({ field }) => (
              <DetailInput field={field} label="Cantidad de campañas" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.52.value`}
            render={({ field }) => (
              <DetailInput
                field={field}
                label="Porcentaje solicitado por venta"
              />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.53.value`}
            render={({ field }) => (
              <DetailInput field={field} label="Tiempo de trabajo" />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-14">
        <AccordionTrigger>14. MENTORÍA</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.54.value`}
            render={({ field }) => (
              <DetailInput field={field} label="Cantidad de Horas" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.55.value`}
            render={({ field }) => (
              <DetailInput field={field} label="Seguimiento de Actividades" />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-15" className="border-none">
        <AccordionTrigger>15. ACADEMIA</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.56.value`}
            render={({ field }) => (
              <DetailInput field={field} label="Membresía" />
            )}
          />
          <FormField
            control={form.control}
            name={`package.${packageIndex}.package_items.57.value`}
            render={({ field }) => (
              <DetailInput field={field} label="Mentoría grupal - Cantidad" />
            )}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
