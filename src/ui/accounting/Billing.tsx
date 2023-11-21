import * as accounting from 'accounting';
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, DownloadCloud, Search } from "lucide-react";
function Billing() {
    const [modal, setModal] = useState(false);
    const [fechaEmision, setFechaEmision] = useState("");
    const [serie, setSerie] = useState("");
    const [numero, setNumero] = useState("");
    const [ruc, setRuc] = useState("");
    const [razSocial, setRazSocial] = useState("");
    const [dirección, setDirección] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [monto, setMonto] = useState("");
    const [moneda, setMoneda] = useState("");
    const [estado, setEstado] = useState("");
    const [alert, setAlert] = useState("");
    const [facturas, setFacturas] = useState([
        {
            fechaEmision: "",
            serie: "",
            numero: "",
            ruc: "",
            razSocial: "",
            dirección: "",
            descripcion: "",
            monto: 0,
            moneda: "",
            estado: "",
        },
    ]);

    const handleOpenModal = () => {
        setModal(true);
    };

    const resetModalState = () => {
        setFechaEmision("");
        setSerie("");
        setNumero("");
        setRuc("");
        setRazSocial("");
        setDirección("");
        setDescripcion("");
        setMonto("");
        setMoneda("");
        setEstado("");
    };

    const handleCloseModal = () => {
        setModal(false);
        resetModalState();
        setAlert("");
    };

    const handleAddInvoice = () => {
        if (
            !fechaEmision ||
            !serie ||
            !numero ||
            !ruc ||
            !razSocial ||
            !dirección ||
            !descripcion ||
            !monto ||
            !moneda ||
            !estado
        ) {
            setAlert("Por favor, llene todos los campos antes de agregar una factura");
            return;
        }

        const nuevaFactura = {
            fechaEmision,
            serie,
            numero,
            ruc,
            razSocial,
            descripcion,
            dirección,
            monto: Number(monto),
            moneda,
            estado,
        };
        setFacturas([...facturas, nuevaFactura]);
        handleCloseModal();
    };

    useEffect(() => {
        resetModalState();
    }, []);

    const handleMonedaChange = (value: string) => {
        setMoneda(value);
    };

    const handleEstadoChange = (value: string) => {
        setEstado(value);
    };

    const formatCurrency = (amount: number, currency: string) => {
        const formattedAmount = accounting.formatMoney(amount, {
            symbol: currency === 'dolares' ? '$' : 'S/.',
            format: '%s%v',
            precision: 2,
        });

        return formattedAmount;
    };

    return (
        <>
            <div className="flex justify-center items-center flex-col pr-20 pb-20 pt-20 pl-20">
                <Label className="pb-5 text-xl font-bold">
                    ¿Qué acción quieres llevar a cabo?
                </Label>
                <div className="w-1/2 flex justify-center">
                    <Button onClick={handleOpenModal} className="p-5 mr-5 shadow-lg">
                        <PlusCircle className="mr-2" /> Nueva Factura
                    </Button>
                    <Button className="p-5 shadow-lg">
                        <DownloadCloud className="mr-2" /> Exportar Tabla
                    </Button>
                </div>
            </div>
            <div className="flex justify-center flex-col p-10 pl-20 pr-20 b-20 ml-20 mb-20 mr-20 bg-[#CCCED7] dark:bg-muted">
                <Label className="flex justify-center mb-10 text-xl font-bold">
                    ¿Estás buscando una factura?
                </Label>
                <div className="flex flex-row justify-around w-full">
                    <div className="flex flex-col w-1/6">
                        <Label>Cliente</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecciona Cliente" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="--">--</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col w-1/6">
                        <Label>Fecha de Emision</Label>
                        <Select>
                            <Input type="date"></Input>
                        </Select>
                    </div>
                    <div className="flex flex-col w-1/6">
                        <Label>Importe</Label>
                        <Input placeholder="Escribe el monto" type="number"></Input>
                    </div>
                    <div className="flex flex-col w-1/8">
                        <Button className="mt-6">
                            {" "}
                            <Search className="mr-2" />
                            Buscar
                        </Button>
                    </div>
                </div>
            </div>
            <div className="pl-20 pr-20 pb-20">
                <Table className="border-2 black shadow-md">
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold">FECHA DE EMISIÓN</TableHead>
                            <TableHead className="font-bold">SERIE</TableHead>
                            <TableHead className="font-bold">NÚMERO</TableHead>
                            <TableHead className="font-bold">RUC</TableHead>
                            <TableHead className="font-bold">RAZÓN SOCIAL</TableHead>
                            <TableHead className="font-bold">DIRECCIÓN</TableHead>
                            <TableHead className="font-bold">DESCRIPCIÓN</TableHead>
                            <TableHead className="font-bold">MONTO</TableHead>
                            <TableHead className="font-bold">ESTADO</TableHead>
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
                                <TableCell>{factura.dirección}</TableCell>
                                <TableCell>{factura.descripcion}</TableCell>
                                <TableCell>{formatCurrency(factura.monto, factura.moneda)}</TableCell>
                                <TableCell style={{ color: factura.estado === 'PAGADO' ? 'green' : 'red', fontWeight: 'bold' }}>{factura.estado}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div>
                {modal && (
                    <div>
                        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"></div>
                        <Card className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 max-w-screen-sm p-8 rounded-md shadow-md z-50">
                            <CardHeader className="flex items-center">
                                <CardTitle className="text-xl">AGREGAR NUEVA FACTURA</CardTitle>
                                {alert && <p className="text-red-500">{alert}</p>}
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
                                        <Input
                                            type="text"
                                            value={serie}
                                            onChange={(e) => setSerie(e.target.value)}
                                        ></Input>
                                    </div>
                                    <div className="p-2">
                                        <Label>Número</Label>
                                        <Input
                                            type="number"
                                            value={numero}
                                            onChange={(e) => setNumero(e.target.value)}
                                        ></Input>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="p-2">
                                        <Label>Ruc</Label>
                                        <Input
                                            type="number"
                                            value={ruc}
                                            onChange={(e) => setRuc(e.target.value)}
                                        ></Input>
                                    </div>
                                    <div className="p-2">
                                        <Label>Razón Social</Label>
                                        <Input
                                            type="text"
                                            value={razSocial}
                                            onChange={(e) => setRazSocial(e.target.value)}
                                        ></Input>
                                    </div>
                                    <div className="p-2">
                                        <Label>Dirección</Label>
                                        <Input
                                            type="text"
                                            value={dirección}
                                            onChange={(e) => setDirección(e.target.value)}
                                        ></Input>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <Label>Descripción</Label>
                                    <Textarea
                                        placeholder="Escribe Aquí"
                                        value={descripcion}
                                        onChange={(e) => setDescripcion(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-row">
                                    <div className="p-2">
                                        <Label>Monto</Label>
                                        <Input
                                            type="number"
                                            value={monto}
                                            onChange={(e) => setMonto(e.target.value)}
                                        ></Input>
                                    </div>
                                    <div className="p-2">
                                        <Label>Moneda</Label>
                                        <Select value={moneda} onValueChange={handleMonedaChange}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecciona" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="soles">Soles</SelectItem>
                                                    <SelectItem value="dolares">Dolares</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="p-2">
                                        <Label>Estado</Label>
                                        <Select value={estado} onValueChange={handleEstadoChange}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecciona" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="PAGADO">Pagado</SelectItem>
                                                    <SelectItem value="PENDIENTE">Pendiente</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="pt-2 pl-8 pr-8">
                                <div className="w-full flex justify-between">
                                    <Button onClick={handleCloseModal} className="w-1/3">
                                        CERRAR
                                    </Button>
                                    <Button className="w-1/3" onClick={handleAddInvoice}>
                                        AGREGAR
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                )}
            </div>
        </>
    );
}

export default Billing;

