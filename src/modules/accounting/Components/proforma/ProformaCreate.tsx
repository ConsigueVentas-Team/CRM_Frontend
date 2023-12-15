import { useState } from "react";
import { ProformaForm } from "./ProformaForm";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { ProformaScheme } from "@/lib/validators/proforma";
import { Link, useNavigate } from "react-router-dom";

function ProformaCreate() {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [values, setValues] = useState({});

  const onSubmit = (formData: z.infer<typeof ProformaScheme>) => {
    setIsPending(true);
    setTimeout(() => {
    console.log(formData);
    setIsPending(false);
    navigate("/proforma");
    }, 1000);
    
  };

  return (
    <section className="h-screen py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Create Proforma</h3>
      <ProformaForm onSubmit={onSubmit} />
      <div className="fixed w-full left-0 bottom-0 bg-background flex gap-4 justify-end py-4 px-20 xl:px-40">
        <Button variant="outline">
          <Link to="/proforma">Cancelar</Link>
        </Button>
        <Button disabled={isPending} type="submit" form="add-proforma-form">
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
