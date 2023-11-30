import { UserDataTable } from "../components/UserDataTable";
import { UserActions } from "../components/UserActions";

export function Users() {
  return (
    <section className="py-6 flex flex-col gap-8">
      <h3 className="text-2xl">Usuarios</h3>
      <div className="flex gap-4">
        <UserActions />
      </div>
      <div>
        <UserDataTable />
      </div>
    </section>
  );
}
