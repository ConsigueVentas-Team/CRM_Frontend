
export const Profile = () => {
    return (
        <div className="w-full bg-white">
            <div className="flex flex-col gap-10 w-[80%] mx-auto">
                <div className="flex gap-10 ">
                    <div className="bg-white shadow-md p-4 rounded-lg w-full flex flex-col gap-3">
                        <p className="flex justify-center font-medium">DATOS PERSONALES</p>
                        <div>
                            <p>Nombre</p>
                            <p className="font-medium">Erick</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="">
                                <p className="">DNI</p>
                                <p className="font-medium">12345678</p>
                            </div>
                            <div className="">
                                <p className="">Fecha de nacimiento</p>
                                <p className="font-medium">12/12/12</p>
                            </div>
                            <div className="">
                                <p>Número de celular</p>
                                <p className="font-medium">123456789</p>
                            </div>
                        </div>
                        <div>
                            <p>Correo</p>
                            <p className="font-medium">ejemplo@gmail.com</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md p-4 rounded-lg w-full">

                    </div>
                </div>

                <div className="flex gap-10">
                    <div className="bg-white shadow-md p-4 rounded-lg w-full flex flex-col gap-3">
                        <p className="flex justify-center font-medium">DATOS PERSONALES</p>
                        <div>
                            <p>Departamento</p>
                            <p className="font-medium">Departamento de desarrollo web</p>
                        </div>
                        <div className="flex justify-start gap-8">
                            <div className="">
                                <p className="">Perfil</p>
                                <p className="font-medium">Diseñador UI/UX</p>
                            </div>
                            <div className="">
                                <p className="">Rol</p>
                                <p className="font-medium">Líder Núcleo</p>
                            </div>
                        </div>
                        <div>
                            <p>Núcleo</p>
                            <p className="font-medium">Diseño web</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md p-4 rounded-lg w-full">
                        <p className="flex justify-center font-medium">DATOS DE ASISTENCIA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
