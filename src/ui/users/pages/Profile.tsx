import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useState } from "react"
import ConfigurePassword from "../components/ConfigurePassword"

export const Profile = () => {

    const [statusButton, setstatusButton] = useState("CC")

    const handleButton = (status: string) => {
        if ("CC" === status) {
            setstatusButton("CC")
        }

        if ("PS" === status) {
            setstatusButton("PS")
        }

        if ("AS" === status) {
            setstatusButton("AS")
        }
    }


    return (
        <div className="w-full bg-background">
            <div className="flex flex-col sm:flex-row">
                <div className="flex flex-col basis-1/3 py-5  px-3 lg:px-10 md:border-e ">
                    <div className=" flex justify-center object-cover">
                        <img src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZpbCUyMGRlJTIwaG9tYnJlfGVufDB8fDB8fHww" alt="perfil" className="rounded-full w-48 h-48 flex-initial" />
                    </div>
                    <div className="flex flex-col items-center mb-4 mt-4">
                        <p className="font-bold text-2xl">Erick Tello</p>
                        <p className="text-gray-500 text-sm">Bienvenido a Consigue Ventas</p>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-4 mt-4">
                        <Button variant={`${statusButton === "CC" ? "default" : "outline"}`} className="flex justify-between" onClick={e => handleButton("CC")}>
                            <p>Configuración de Cuenta</p>
                            <ChevronRight size={"18px"} />
                        </Button>
                        <Button variant={`${statusButton === "PS" ? "default" : "outline"}`} className="flex justify-between" onClick={e => handleButton("PS")}>
                            <p>Privacidad y Seguridad</p>
                            <ChevronRight size={"18px"} />
                        </Button>
                        <Button variant={`${statusButton === "AS" ? "default" : "outline"}`} className="flex justify-between" onClick={e => handleButton("AS")}>
                            <p>Ayuda y Soporte</p>
                            <ChevronRight size={"18px"} />
                        </Button>
                    </div>
                </div>

                {
                    statusButton === "CC" && (
                        <div className="sm:flex-1 py-5  px-4 lg:px-10">
                            <p className="font-bold mb-2 text-xl flex justify-center sm:flex-none sm:justify-start">Configuración de Cuenta</p>
                            <div className="grid md:grid-cols-2 gap-6 w-full ">
                                <div className="grid w-full sm:max-w-sm items-center gap-1.5">
                                    <p className="text-gray-500 text-sm">Departamento</p>
                                    <p className="border border-primary rounded-md font-medium px-2 py-1">Departamento de diseño</p>
                                </div>
                                <div className="grid w-full sm:max-w-sm items-center gap-1.5">
                                    <p className="text-gray-500 text-sm">Dni</p>
                                    <p className="border border-primary rounded-md font-medium px-2 py-1">12345678</p>
                                </div>
                                <div className="grid w-full sm:max-w-sm items-center gap-1.5">
                                    <p className="text-gray-500 text-sm">Email</p>
                                    <p className="border border-primary rounded-md font-medium px-2 py-1">erick@gmail.com</p>
                                </div>
                                <div className="grid w-full sm:max-w-sm items-center gap-1.5">
                                    <p className="text-gray-500 text-sm">Núcleo</p>
                                    <p className="border border-primary rounded-md font-medium px-2 py-1">Diseño web</p>
                                </div>
                                <div className="grid w-full sm:max-w-sm items-center gap-1.5">
                                    <p className="text-gray-500 text-sm">Perfil</p>
                                    <p className="border border-primary font-medium rounded-md px-2 py-1">Diseñador UX/UI</p>
                                </div>
                                <div className="grid w-full sm:max-w-sm items-center gap-1.5">
                                    <p className="text-gray-500 text-sm">Rol</p>
                                    <p className="border border-primary font-medium rounded-md px-2 py-1">Líder Núcleo</p>
                                </div>
                            </div>

                            <p className="font-bold mb-2 mt-8 text-xl flex justify-center sm:flex-none sm:justify-start">Datos de Asistencia</p>
                        </div>
                    )
                }

                {
                    statusButton === "PS" && (
                        <div className="sm:flex-1 py-5  px-4 lg:px-10">
                            <ConfigurePassword />
                        </div>
                    )
                }

                {
                    statusButton === "AS" && (
                        <div className="sm:flex-1 py-5  px-4 lg:px-10">
                            <p>AS</p>
                        </div>
                    )
                }

            </div>
        </div>
    )
}
