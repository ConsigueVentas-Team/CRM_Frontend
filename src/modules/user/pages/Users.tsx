import { UserDataTable } from "../components/UserDataTable";
import { UserActions } from "../components/UserActions";
import { useTitle } from "@/hooks/useTitle";
import { useEffect, useState } from "react";
import { User } from "@/types/auth";
import api from "@/services/api";

export function Users() {
  useTitle("Usuarios");

  const [isPending, seIsPending] = useState(false);
  const [isLaoding, setIsLoading] = useState(false);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try{
        setIsLoading(true)
        const response = await api.get("/app/users")
        setUsers(response.data)
      }catch(error){ 
        console.log(error)
      }finally{
        setIsLoading(false)
      }
    };
    getUsers()
  }, [])

  
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
