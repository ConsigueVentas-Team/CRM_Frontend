import { useState } from "react";
import { ProformaForm } from "./ProformaForm";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { ProformaScheme } from "@/lib/validators/proforma";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/useToast";
import api from "@/services/api";
import { useMutation } from "react-query";

function ProformaCreate() {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [values, setValues] = useState({});

  const onSubmit = async (formData: z.infer<typeof ProformaScheme>) => {
    setIsPending(true);
    try {
      const result = await api.post("/proformas/create", formData);
      if (result.status >= 400) {
        toast({
          description: "Error al agregar la proforma",
          variant: "destructive",
        });
      } else {
        toast({
          description: "Proforma agregada correctamente",
        });
        navigate("/proforma");
      }
    } catch (error) {
      console.log(error);
      toast({
        description: "Error al agregar la proforma",
        variant: "destructive",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section className="h-screen py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Create Proforma</h3>
      <ProformaForm onSubmit={onSubmit} />
      <div className="sticky h-[110rem] w-[110%] left-0 bottom-0 bg-background flex gap-4 justify-end py-4 px-20 xl:px-40">
        <Button variant="outline" className="relative">
          <Link to="/proforma">Cancelar</Link>
        </Button>
        <Button
          disabled={isPending}
          type="submit"
          form="add-proforma-form"
          className="relative"
        >
          {isPending && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
          )}
          Agregar
          <span className="sr-only">Agregar nueva proforma</span>
        </Button>
      </div>
    </section>
  );
}

export default ProformaCreate;
