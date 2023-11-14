import { Button } from "@/components/ui/button"

export const Profile = () => {
    return (
        <div className="w-full bg-white">
            <div className="flex flex-col sm:flex-row">
                <div className="flex flex-col basis-1/3 p-8">
                    <div className="rounded-full bg-black"></div>
                    <div className="flex flex-col items-center mb-4">
                        <p className="font-bold text-2xl">Erick Tello</p>
                        <p className="text-gray-500">Bienvenido a Consigue Ventas</p>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-4 mt-4">
                        <Button>Configuración de Cuenta</Button>
                        <Button>Privacidad y Seguridad</Button>
                        <Button>Ayuda y Soporte</Button>
                    </div>
                </div>
                <div className="flex-1 p-8">
                    <p className="font-bold mb-2 text-xl flex justify-center sm:flex-none sm:justify-start">Configuración de Cuenta</p>
                    <div className="grid md:grid-cols-2 gap-4 w-full">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <p className="text-gray-500">Departamento</p>
                            <p className="border-gray-300 border-2 rounded-md font-medium px-2 py-1">Departamento de diseño</p>
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <p className="text-gray-500">DNI</p>
                            <p className="border-2 border-gray-300 rounded-md font-medium px-2 py-1">12345678</p>
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <p className="text-gray-500">Email</p>
                            <p className="border-2 border-gray-300 rounded-md font-medium px-2 py-1">erick@gmail.com</p>
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <p className="text-gray-500">Núcleo</p>
                            <p className="border-2 border-gray-300 rounded-md font-medium px-2 py-1">Diseño web</p>
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <p className="text-gray-500">Perfil</p>
                            <p className="border-2 border-gray-300 font-medium rounded-md px-2 py-1">Diseñador UX/UI</p>
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <p className="text-gray-500">Rol</p>
                            <p className="border-2 border-gray-300 font-medium rounded-md px-2 py-1">Líder Núcleo</p>
                        </div>
                    </div>

                    <p className="font-bold mb-2 mt-8 text-xl flex justify-center sm:flex-none sm:justify-start">Datos de Asistencia</p>
                </div>
            </div>
        </div>
    )
}
