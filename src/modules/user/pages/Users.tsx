import { UserDataTable } from "../components/UserDataTable";
import { UserActions } from "../components/UserActions";
import { useTitle } from "@/hooks/useTitle";
import api from "@/services/api";
import { useQuery } from "react-query";

const getUsers = async () => {
  const { data } = await api.get("/users");
  return data;
};

export function Users() {
  useTitle("Usuarios");
  const { data: users, isLoading } = useQuery("users", getUsers);

  return (
    <section className="flex flex-col gap-8">
      <h3 className="text-3xl">Usuarios</h3>
      <div className="flex gap-4">
        <UserActions />
      </div>
      <div>
        <UserDataTable data={users ? users : []} isLoading={isLoading} />
      </div>
    </section>
  );
}
