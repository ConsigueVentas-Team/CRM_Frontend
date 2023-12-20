import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

export function ProformaFormObservation({ form }: any) {
  const {control, register} = useFormContext();
  const {fields, append, remove} = useFieldArray({
    control,
    name: "observations"
  })

  return (
    <div className="border rounded-lg p-4 mb-20">
      <p className="font-bold mb-4">Observaciones</p>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-4">
          {fields.map((field, index) => (
            <Textarea
              key={index}
              {...register(`observations.${index}.description`)}
            />

          ))}
        </div>
        <Button size="icon" type="button" variant="outline" onClick={() => append({descripcion: ""})}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
