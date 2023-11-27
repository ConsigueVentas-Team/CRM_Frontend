import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"

export const ConfigureName = ({ setstatusButton }) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
                <ArrowLeft size={"20px"} onClick={() => {
                    setstatusButton("CL")
                }} />
                <p className="font-bold">Cambia tu nombre</p>
            </div>
            <div className="flex flex-col gap-3">
                <Input placeholder="Nombre nueva" />
            </div>


            <div className="justify-end flex">
                <Button className=" px-5 ">Guardar</Button>
            </div>

        </div>
    )
}
