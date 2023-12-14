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

export function ProformaFormPackage({ form }: Props) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>01. ESTRATEGIA</AccordionTrigger>
        <AccordionContent>
          <FormField
            control={form.control}
            name="BusinessModelStrategy"
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
            name="LogoCreation"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Creación o renovación del logo (Opcional) y portada"
              />
            )}
          />
          <FormField
            control={form.control}
            name="CreativeConcept"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Concepto creativo y línea gráfica digital"
              />
            )}
          />
          <FormField
            control={form.control}
            name="PublicationDesign"
            render={({ field }) => (
              <DetailCheckbox field={field} label="Diseño de publicaciones" />
            )}
          />
          <FormField
            control={form.control}
            name="IGWhatsappStories"
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
            name="SocialMediaManagement"
            render={({ field }) => (
              <DetailCheckboxGroup
                form={form}
                field={field}
                label="Cantidad de redes sociales a gestionar"
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
            name="ContentCreation"
            render={({ field }) => (
              <DetailInput label="Creación de contenido" type="post" />
            )}
          />
          <FormField
            control={form.control}
            name="ContentCreationStories"
            render={({ field }) => (
              <DetailInput
                label="Creación de contenido en historias"
                type="stories"
              />
            )}
          />
          <FormField
            control={form.control}
            name="Monitoring"
            render={({ field }) => (
              <DetailInput label="Monitoreo" type="monitoring" />
            )}
          />
          <FormField
            control={form.control}
            name="OrganicStrategy"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Ejecución de estrategia orgánica"
              />
            )}
          />
          <FormField
            control={form.control}
            name="CompetitorAnalysis"
            render={({ field }) => (
              <DetailCheckbox
                field={field}
                label="Análisis de la Competencia "
              />
            )}
          />
          <FormField
            control={form.control}
            name="IdealClientCreation"
            render={({ field }) => (
              <DetailRadioGroup field={field} label="Creación del cliente Ideal"/>
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>05. PUBLICIDAD PAGADA</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>06. WHATSAPP BUSINESS</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>07. CRM KOMMO</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>08. ATENCIÓN AL CLIENTE</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger>09. CIERRE DE VENTAS</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-10">
        <AccordionTrigger>10. PÁGINA WEB</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-11">
        <AccordionTrigger>11. MENTORÍA</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-12">
        <AccordionTrigger>12. REPORTE</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
