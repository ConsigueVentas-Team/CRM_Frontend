import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"

interface Props {
    setstatusButton: (status: string) => void;
}

export const ConfigureName = ({ setstatusButton }: Props) => {
    return (
        <div className="flex flex-col gap-3 max-w-md">
            <div className="flex gap-3 items-center mb-3">
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
