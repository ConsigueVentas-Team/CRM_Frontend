import { Button } from "@/components/ui/button"
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState } from "react"

function Billing() {
    const [modal, setModal] = useState(false);

    const handleOpenModal = () => {
        setModal(true);
    }

    const handleCloseModal = () => {
        setModal(false);
    }

    return (
        <>
            <Button
                onClick={handleOpenModal}>Agregar</Button>
            <div>
                {modal && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Agregar nueva Factura</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>
                                <Label>Fecha de Emisión</Label>
                                <Input type="date"></Input>
                            </div>

                            <div>
                                <Label>Ruc</Label>
                                <Input type="number"></Input>
                            </div>

                            <div>
                                <Label>Razón Social</Label>
                                <Input type="text"></Input>
                            </div>

                            <div>
                                <Label>Serie</Label>
                                <Input type="text"></Input>
                            </div>
                            <div>
                                <Label>Número</Label>
                                <Input type="number"></Input>
                            </div>
                            <div>
                                <Label>Descripción</Label>
                                <Input type="text"></Input>
                            </div>
                            <div>
                                <Label>Monto</Label>
                                <Input type="number"></Input>
                            </div>
                            <div>
                                <Label>Moneda</Label>
                                <select>
                                    <option value="dolares">Dólares</option>
                                    <option value="soles">Soles</option>
                                </select>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button
                                onClick={handleCloseModal}>Cerrar</Button>
                            <Button>Agregar</Button>
                        </CardFooter>
                    </Card>
                )}
            </div>
        </>
    )
}

export default Billing