import { UserDataTable } from "../components/UserDataTable";
import { UserActions } from "../components/UserActions";
import { useTitle } from "@/hooks/useTitle";
import { useState } from "react";
import { User } from "@/types/auth";

export function Users() {
  useTitle("Usuarios");

  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      username: "username",
      email: "email",
      nombre: "nombre",
      apellidos: "apellidos",
      doc_id: 2,
      num_identification: "123456789",
      cellphone: "123456789",
      address: "Dirección2",
      type_id: 2,
    },
  ]);

  return (
    <section className="py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Usuarios</h3>
      <div className="flex gap-4">
        <UserActions setUsers={setUsers} />
      </div>
      <div>
        <UserDataTable data={users} />
      </div>
    </section>
  );
}
