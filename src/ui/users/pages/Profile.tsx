import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import ConfigurePassword from "../components/ConfigurePassword"
import { useAuth } from "@/hooks/useAuth"
import api from "@/services/api"
import { UserDetail } from "@/types/auth"

export const Profile = () => {
    const { user } = useAuth()
    const [dataUser, setDataUser] = useState<UserDetail>()

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

    const getDataUser = async () => {
        try {
            const response = await api.get(`user/${user?.id}`)
            setDataUser(response.data)
            localStorage.setItem("userData", JSON.stringify(response.data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        const dataLocalStorage = localStorage.getItem('dataUser')
        if (!dataLocalStorage || JSON.parse(dataLocalStorage).id !== user?.id) {
            getDataUser()
        } else {
            setDataUser(JSON.parse(dataLocalStorage))
        }

    }, [])

    const dataProfile = [
        {
            title: "Departamento",
            data: `${dataUser?.department_name}`
        },
        {
            title: "Email",
            data: `${dataUser?.email}`
        },
        {
            title: "Núcleo",
            data: `${dataUser?.core_name}`
        },
        {
            title: "Perfil",
            data: `${dataUser?.position_name}`
        },
    ]

    return (
        <div className="bg-background graphics-container block">
            <div className="flex flex-col sm:flex-row">
                <div className="flex flex-col basis-1/3 py-5  px-3 lg:px-10">
                    <div className=" flex justify-center">
                        <img src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZpbCUyMGRlJTIwaG9tYnJlfGVufDB8fDB8fHww" alt="perfil" className="rounded-full w-48 h-48 2xl:w-80 2xl:h-80 flex-initial object-cover" />
                    </div>
                    <div className="flex flex-col items-center mb-4 mt-4 gap-3">
                        <p className="font-bold text-2xl">{dataUser?.username}</p>
                        <p className="text-gray-500 text-sm">Bienvenido a Consigue Ventas</p>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-4 2xl:gap-8 mt-4">
                        <Button variant={`${statusButton === "CC" ? "default" : "outline"}`} className="flex justify-between" onClick={() => handleButton("CC")}>
                            <p>Configuración de Cuenta</p>
                            <ChevronRight size={"18px"} />
                        </Button>
                        <Button variant={`${statusButton === "PS" ? "default" : "outline"}`} className="flex justify-between" onClick={() => handleButton("PS")}>
                            <p>Privacidad y Seguridad</p>
                            <ChevronRight size={"18px"} />
                        </Button>
                        <Button variant={`${statusButton === "AS" ? "default" : "outline"}`} className="flex justify-between" onClick={() => handleButton("AS")}>
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
                                {
                                    dataProfile.map((item, index) => (
                                        <div className="grid w-full items-center gap-1.5" key={index}>
                                            <p className="text-gray-500 text-sm">{item.title}</p>
                                            <p className="border border-primary rounded-md font-medium px-2 py-1">{item.data}</p>
                                        </div>
                                    ))
                                }
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
