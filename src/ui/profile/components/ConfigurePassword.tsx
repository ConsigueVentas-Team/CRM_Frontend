import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"

const ConfigurePassword = ({ setstatusButton }) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
                <ArrowLeft size={"20px"} onClick={() => {
                    setstatusButton("CL")
                }} />
                <p className="font-bold">Cambia tu contraseña</p>
            </div>
            <div className="flex flex-col gap-3">
                <Input placeholder="Contraseña actual" />
                <Input placeholder="Nueva contraseña" />
                <Input placeholder="Confirmar contraseña" />
            </div>

            <p className="font-thin text-primary">
                Estas seguro de cambiar su contraseña? una vez que cambie no podrá modificarlo.
            </p>
            <div className="justify-end flex">
                <Button className=" px-5 ">Guardar</Button>
            </div>

        </div>
    )
}

export default ConfigurePassword