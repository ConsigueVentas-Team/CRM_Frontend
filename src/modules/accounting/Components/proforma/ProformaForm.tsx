import { Form } from "@/components/ui/form";
import { ProformaScheme } from "@/lib/validators/proforma";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ProformaFormPersonnel } from "./ProformaFormPersonnel";
import { ProformaFormObservation } from "./ProformaFormObservations";
import { ProformaFormPackages } from "./ProformaFormPackages";
import { ProformaFormBasicInfo } from "./ProformaFormBasicInfo";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { packageIntermediate } from "./management/data";
import { useAuth } from "@/hooks/useAuth";
interface Props {
  onSubmit: (data: z.infer<typeof ProformaScheme>) => void;
}

// NOTE: cambiar requered_by por required_by

export function ProformaForm({ onSubmit }: Props) {
  const { user } = useAuth();
  const [packages, setPackages] = useState<Package[]>(packageIntermediate);
  const form = useForm<z.infer<typeof ProformaScheme>>({
    resolver: zodResolver(ProformaScheme),
    defaultValues: {
      invoice_number: "001",
      date: new Date().toLocaleDateString(),
      reference: "",
      prepared_by: user?.nombre + " " + user?.apellidos,
      requered_by: "",
      approved_by: "Jhoel Fernández A.",
      email: "",
      phone_number: "",
      work_time: "",
      company_id: 0,
      type: "Intermedia",
      observations: [],
      package: packages,
      personal_proyecto: [],
    },
  });

  useEffect(() => {
    form.setValue("package", packages);
  }, [packages]);

  return (
    <Form {...form}>
      <Button type="submit" onClick={() => {console.log(form.getValues())}}>datos</Button>
      <form id="add-proforma-form" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <ProformaFormBasicInfo form={form} setPackages={setPackages} />
          <ProformaFormPackages form={form} />
          <ProformaFormPersonnel form={form} />
          <ProformaFormObservation form={form} />
        </div>
      </form>
    </Form>
  );
}
