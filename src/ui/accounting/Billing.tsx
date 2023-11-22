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
import { PlusCircle, Search } from "lucide-react";
import NewInvoice from './Components/ModalNewInvoice';
import PDFExportButton from "./Components/ExportTable";

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
        console.log("Closing modal");
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
                        <PDFExportButton data={facturas} />
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
                    <NewInvoice
                        modal={modal}
                        fechaEmision={fechaEmision}
                        setFechaEmision={setFechaEmision}
                        serie={serie}
                        setSerie={setSerie}
                        numero={numero}
                        setNumero={setNumero}
                        ruc={ruc}
                        setRuc={setRuc}
                        razSocial={razSocial}
                        setRazSocial={setRazSocial}
                        dirección={dirección}
                        setDirección={setDirección}
                        descripcion={descripcion}
                        setDescripcion={setDescripcion}
                        monto={monto}
                        setMonto={setMonto}
                        moneda={moneda}
                        setMoneda={setMoneda}
                        estado={estado}
                        setEstado={setEstado}
                        alert={alert}
                        handleCloseModal={handleCloseModal}
                        handleAddInvoice={handleAddInvoice}
                        handleMonedaChange={handleMonedaChange}
                        handleEstadoChange={handleEstadoChange}
                    />
                )}
            </div>
        </>
    );
}

export default Billing;

