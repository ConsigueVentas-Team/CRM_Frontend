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
    const [fechaEmision, setFechaEmision] = useState('');
    const [serie, setSerie] = useState('');
    const [numero, setNumero] = useState('');
    const [ruc, setRuc] = useState('');
    const [razSocial, setRazSocial] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [monto, setMonto] = useState('');
    const [moneda, setMoneda] = useState('soles');
    const [facturas, setFacturas] = useState([
        {
            fechaEmision: "2023-11-20",
            serie: "INV001",
            numero: "001",
            ruc: "123456789",
            razSocial: "Empresa ABC",
            descripcion: "Compra de productos",
            monto: 1000,
            moneda: "dolares",
        }]);

    const handleOpenModal = () => {
        setModal(true);
    }

    const handleCloseModal = () => {
        setModal(false);
    }

    const handleAddInvoice = () => {
        const nuevaFactura = {
            fechaEmision,
            serie,
            numero,
            ruc,
            razSocial,
            descripcion,
            monto: Number(monto),
            moneda,
        };
        setFacturas([...facturas, nuevaFactura]);
        handleCloseModal();
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
                            <TableHead>Razón Social</TableHead>
                            <TableHead>Descripción</TableHead>
                            <TableHead>Monto</TableHead>
                            <TableHead>Moneda</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {facturas.map((factura, index) => (
                            <TableRow key={index}>
                                <TableCell>{factura.fechaEmision}</TableCell>
                                <TableCell>{factura.serie}</TableCell>
                                <TableCell>{factura.numero}</TableCell>
                                <TableCell>{factura.ruc}</TableCell>
                                <TableCell>{factura.razSocial}</TableCell>
                                <TableCell>{factura.descripcion}</TableCell>
                                <TableCell>{factura.monto}</TableCell>
                                <TableCell>{factura.moneda}</TableCell>
                            </TableRow>
                        ))}
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
                                        <Input
                                            type="date"
                                            value={fechaEmision}
                                            onChange={(e) => setFechaEmision(e.target.value)}
                                        ></Input>
                                    </div>
                                    <div className="p-2">
                                        <Label>Serie</Label>
                                        <Input type="text"
                                            value={serie}
                                            onChange={(e) => setSerie(e.target.value)}
                                        ></Input>
                                    </div>
                                    <div className="p-2">
                                        <Label>Número</Label>
                                        <Input type="number"
                                            value={numero}
                                            onChange={(e) => setNumero(e.target.value)}
                                        ></Input>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="p-2">
                                        <Label>Ruc</Label>
                                        <Input type="number"
                                            value={ruc}
                                            onChange={(e) => setRuc(e.target.value)}
                                        ></Input>
                                    </div>
                                    <div className="p-2">
                                        <Label>Razón Social</Label>
                                        <Input type="text"
                                            value={razSocial}
                                            onChange={(e) => setRazSocial(e.target.value)}
                                        ></Input>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <Label>Descripción</Label>
                                    <textarea className="w-full border-2 black p-2 rounded-md"
                                        value={descripcion}
                                        onChange={(e) => setDescripcion(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="flex flex-row">
                                    <div className="p-2">
                                        <Label>Monto</Label>
                                        <Input type="number"
                                            value={monto}
                                            onChange={(e) => setMonto(e.target.value)}
                                        ></Input>
                                    </div>
                                    <div className="p-2">
                                        <Label>Moneda</Label>
                                        <select className="border-2 black rounded-md ml-2 p-1"
                                            value={moneda}
                                            onChange={(e) => setMoneda(e.target.value)}>
                                            <option value="soles">Soles</option>
                                            <option value="dolares">Dólares</option>
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
                                        className="w-60"
                                        onClick={handleAddInvoice}>Agregar</Button>
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