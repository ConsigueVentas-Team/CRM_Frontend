/* eslint-disable @typescript-eslint/no-unused-vars */
//import { UserDataTable } from "../components/UserDataTable";
import { ClientActions } from "../components/ClientActions";
import { useTitle } from "@/hooks/useTitle";
import { useState } from "react";
import { ClientDetail } from "@/types/auth";
import { ClientDataTable } from "../components/ClientDataTable";

export function Clients() {
    useTitle("Clientes");

    const [clients, setClients] = useState<ClientDetail[]>([
        {
            id: 1,
            nombre: "nombre",
            apellidos: "apellido",
            address: "direccion",
            cellphone: "celular",
            email: "correo",
        }
    ]);

    return (
        <section className="py-6 flex flex-col gap-8">
            <h3 className="text-3xl">Clientes</h3>
            <div className="flex gap-4">
                <ClientActions setClients={setClients} />
            </div>
            <div>
                <ClientDataTable data={clients}/>
            </div>
        </section>
    );
}

