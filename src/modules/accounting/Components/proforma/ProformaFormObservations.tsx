import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { useState } from "react";

export function ProformaFormObservation({ form }: any) {
  const [observations, setObservations] = useState<string[]>(["observation1"]);

  const addObservation = () => {
    setObservations([...observations, `observation${observations.length + 1}`]);
  };

  return (
    <div className="border rounded-lg p-4 mb-20">
      <p className="font-bold mb-4">Observaciones</p>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-4">
          {observations.map((observation) => (
            <FormField
              control={form.control}
              name={observation}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Escribe aquí tus observaciones"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
        </div>
        <Button size="icon" type="button" onClick={addObservation}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
