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

interface Props {
  form: any;
}

export function ProformaFormAreas({ form }: Props) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>01. ESTRATEGIA</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name="businessModelStrategy"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Estrategia del modelo del negocio"
              />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>02. DISEÑO</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name="logoCreation"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Creación o renovación del logo (Opcional) y portada"
              />
            )}
          />
          <FormField
            control={form.control}
            name="creativeConcept"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Concepto creativo y línea gráfica digital"
              />
            )}
          />
          <FormField
            control={form.control}
            name="publicationDesign"
            render={({ field }) => (
              <DetailCheckbox field={field} label="Diseño de publicaciones" />
            )}
          />
          <FormField
            control={form.control}
            name="highlightedStoriesCreation"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Creación y diseño de historias destacadas en IG y Whatsapp"
              />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>03. GESTIÓN DE REDES SOCIALES</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name="socialMediaManagement"
            render={({ field }) => (
              <DetailCheckboxGroup
                form={form}
                field={field}
                label="Cantidad de redes sociales a gestionar"
              />
            )}
          />
          <FormField
            control={form.control}
            name="contentCreation"
            render={({ field }) => (
              <DetailInput
                field={field}
                label="Creación de contenido"
                type="post"
              />
            )}
          />
          <FormField
            control={form.control}
            name="contentCreationStories"
            render={({ field }) => (
              <DetailInput
                field={field}
                label="Creación de contenido en historias"
                type="stories"
              />
            )}
          />
          <FormField
            control={form.control}
            name="monitoring"
            render={({ field }) => (
              <DetailInput field={field} label="Monitoreo" type="monitoring" />
            )}
          />
          <FormField
            control={form.control}
            name="organicStrategyExecution"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Ejecución de estrategia orgánica"
              />
            )}
          />
          <FormField
            control={form.control}
            name="competitorAnalysis"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Análisis de la Competencia "
              />
            )}
          />
          <FormField
            control={form.control}
            name="idealClientCreation"
            render={({ field }) => (
              <DetailRadioGroup
                field={field}
                label="Creación del cliente Ideal"
              />
            )}
          />
          <FormField
            control={form.control}
            name="socialMediaReport"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Reporte del estado actual de las redes sociales"
              />
            )}
          />
          <FormField
            control={form.control}
            name="contentStrategy"
            render={({ field }) => (
              <DetailCheckbox field={field} label="Estrategia de Contenido" />
            )}
          />
          <FormField
            control={form.control}
            name="organicStrategy"
            render={({ field }) => (
              <DetailCheckbox field={field} label="Estrategia Orgánica" />
            )}
          />
          <FormField
            control={form.control}
            name="socialMediaCreation"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Creación y optimización de redes sociales"
              />
            )}
          />
          <FormField
            control={form.control}
            name="socialMediaCreation"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Planificación de presupuesto a invertir en publicidad"
              />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>04. PRODUCCIÓN</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name="videoEdition"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Edicion de Video"
                warning="utilizamos contenido enviado por el cliente"
              />
            )}
          />
          <FormField
            control={form.control}
            name="photoProduction"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Producción de fotos/videos(Tiktok - reels)"
                warning="el cliente envía todos los recursos"
              />
            )}
          />
          <FormField
            control={form.control}
            name="brandVisit"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Visita a las instalaciones de la marca"
              />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>05. PUBLICIDAD PAGADA</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name="paidAdvertisingStrategy"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Propuesta de Estrategia de publicidad pagada"
                warning="utilizamos contenido enviado por el cliente"
              />
            )}
          />
          <FormField
            control={form.control}
            name="campaignExecution"
            render={({ field }) => (
              <DetailRadioGroup
                field={field}
                label="Ejecución de la campañas"
              />
            )}
          />
          <FormField
            control={form.control}
            name="advertisingChannels"
            render={({ field }) => (
              <DetailCheckboxGroup
                form={form}
                field={field}
                label="Canales de Publicidad"
              />
            )}
          />
          <FormField
            control={form.control}
            name="campaignNumber"
            render={({ field }) => (
              <DetailInput field={field} label="Número de campañas" />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>06. WHATSAPP BUSINESS</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name="appConfiguration"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Configuracion de aplicativo"
              />
            )}
          />
          <FormField
            control={form.control}
            name="productCatalogDesign"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Diseño de catálogo para productos máximo 5"
              />
            )}
          />
          <FormField
            control={form.control}
            name="customLabelsAndMessages"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Creación de etiquetas y mensajes personalizados"
              />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>07. CRM KOMMO</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name="crmPurchase"
            render={({ field }) => (
              <DetailCheckbox field={field} label="Compra de CRM X 6 meses " />
            )}
          />
          <FormField
            control={form.control}
            name="salesFunnelConfiguration"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Configuración del embudo de ventas"
              />
            )}
          />
          <FormField
            control={form.control}
            name="employeeTraining"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Capacitación de colaboradores"
              />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>08. ATENCIÓN AL CLIENTE</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name="training"
            render={({ field }) => (
              <DetailCheckbox field={field} label="Capacitación" />
            )}
          />
          <FormField
            control={form.control}
            name="schedule"
            render={({ field }) => (
              <DetailCheckbox field={field} label="Horario" />
            )}
          />
          <FormField
            control={form.control}
            name="attentionProcess"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Creación de proceso de atención"
              />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger>09. CIERRE DE VENTAS</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name="businessHours"
            render={({ field }) => (
              <DetailCheckbox field={field} label="Horario de atención" />
            )}
          />
          <FormField
            control={form.control}
            name="objectionResponse"
            render={({ field }) => (
              <DetailCheckbox field={field} label="Respuesta a objeciones" />
            )}
          />
          <FormField
            control={form.control}
            name="followUp"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Seguimiento de cierre o entrega de productos de servicio"
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
            name="webPageOptimization"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Optimización de página web"
              />
            )}
          />
          <FormField
            control={form.control}
            name="productCategoriesCatalog"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Catalogo de categorias de los productos"
              />
            )}
          />
          <FormField
            control={form.control}
            name="seoStrategyImplementation"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Implementación de Estrategia de SEO "
              />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-11">
        <AccordionTrigger>11. MENTORÍA</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name="customClassesWithFollowUp"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Clases personalizadas con Seguimiento"
              />
            )}
          />
          <FormField
            control={form.control}
            name="monthlyHoursQuantity"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Cantidad de horas mensuales"
              />
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-12" className="border-none">
        <AccordionTrigger>12. REPORTE</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name="reportResults"
            render={({ field }) => (
              <DetailRadioGroup field={field} label="Reporte de resultados" />
            )}
          />
          <FormField
            control={form.control}
            name="benchmarkingReport"
            render={({ field }) => (
              <DetailCheckbox field={field} label="Reporte de benchmarking" />
            )}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
