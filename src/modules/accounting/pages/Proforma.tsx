import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export function Proforma() {
  return (
    <section className="py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Proformas</h3>
      <div className="flex gap-4">
        <Button>
            <Link className="flex gap-4 items-center" to="/proforma/create">Crear Proforma <MoveRight/></Link>
        </Button>
      </div>
      <div>
      </div>
    </section>
  );
}
