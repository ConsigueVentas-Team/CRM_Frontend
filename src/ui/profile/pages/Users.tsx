import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DataTableDemo } from "@/ui/profile/components/management/DataTable";

export function Users() {
  return (
    <section className="px-60 py-6 flex flex-col gap-8">
      <h3 className="text-2xl">Usuarios</h3>
      <div className="flex gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Crear usuario</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nuevo Usuario</DialogTitle>
              <DialogDescription>
                En este formulario puedes crear un nuevo usuario
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <DataTableDemo />
      </div>
    </section>
  );
}
