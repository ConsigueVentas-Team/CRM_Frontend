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
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

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
            <div className="p-2">
                <Button
                    onClick={handleOpenModal}>Agregar Factura</Button>
            </div>
            <div className="p-20">
                <Table className="border-2 black shadow-md"> 
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Fecha de Emisión</TableHead>
                            <TableHead>Serie</TableHead>
                            <TableHead>Número</TableHead>
                            <TableHead>RUC</TableHead>
                            <TableHead>Razól Social</TableHead>
                            <TableHead>Descripción</TableHead>
                            <TableHead>Monto</TableHead>
                            <TableHead>Moneda</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>INV001</TableCell>
                            <TableCell>INV001</TableCell>
                            <TableCell>INV001</TableCell>
                            <TableCell>INV001</TableCell>
                            <TableCell>INV001</TableCell>
                            <TableCell>INV001</TableCell>
                            <TableCell>INV001</TableCell>
                            <TableCell>INV001</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
            <div>
                {modal && (
                    <div>
                        <Card className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 max-w-screen-sm bg-white p-8 rounded-md shadow-md">
                            <CardHeader className="flex items-center">
                                <CardTitle>AGREGAR NUEVA FACTURA</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-row">
                                    <div className="p-2">
                                        <Label>Fecha de Emisión</Label>
                                        <Input type="date"></Input>
                                    </div>
                                    <div className="p-2">
                                        <Label>Serie</Label>
                                        <Input type="text"></Input>
                                    </div>
                                    <div className="p-2">
                                        <Label>Número</Label>
                                        <Input type="number"></Input>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="p-2">
                                        <Label>Ruc</Label>
                                        <Input type="number"></Input>
                                    </div>
                                    <div className="p-2">
                                        <Label>Razón Social</Label>
                                        <Input type="text"></Input>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <Label>Descripción</Label>
                                    <textarea className="w-full border-2 black p-2 rounded-md"></textarea>
                                </div>
                                <div className="flex flex-row">
                                    <div className="p-2">
                                        <Label>Monto</Label>
                                        <Input type="number"></Input>
                                    </div>
                                    <div className="p-2">
                                        <Label>Moneda</Label>
                                        <select className="border-2 black rounded-md ml-2 p-1">
                                            <option value="dolares">Dólares</option>
                                            <option value="soles">Soles</option>
                                        </select>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="p-2">
                                <div className="w-full flex justify-around">
                                    <Button
                                        onClick={handleCloseModal}
                                        className="w-60"
                                    >Cerrar</Button>
                                    <Button
                                        className="w-60">Agregar</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                )}
            </div>
        </>
    )
}

export default Billing