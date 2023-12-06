import { StyleSheet, Document, View, Text, Page } from '@react-pdf/renderer'
import { Table, TableHeader, TableCell, TableBody, DataTableCell } from '@david.kucsai/react-pdf-table'


export function PDF() {
    return (
        <Document>
            <Page size="A4" style={styles.Page}>
                <View style={{ padding: "18px" }}>
                    <View style={styles.ViewHeade}>
                        <View style={styles.ViewHeadeI}>
                            <Text>RAZÓN SOCIAL: GRUPO ONLINE CONSIGUE VENTAS E.I.R.L</Text>
                            <Text>RUC: 20606936606</Text>
                            <Text>TELÉFONO MÓVIL: 949914249</Text>
                            <Text>CORREO: atención@soyjhoelfernandez.com</Text>
                            <Text>PÁGINA WEB: soyjhoelfernandez.com</Text>
                            <Text>OFICINA: Av. Brasil 2980, oficina 302, Magdalena del Mar Lima</Text>
                            <Text>PORTAFOLIO DIGITAL: https://www.bahance.net/jhoelfernandez</Text>
                        </View>
                        <View style={styles.ViewHeadeI}>
                            <View >
                                <Text >PROFORMA N° 132</Text>
                            </View>
                            <Text>FECHA: 01/12/2023</Text>
                            <Text>REFERENCIA: SERVICIO GESTIÓN DE REDES - PUBLICIDAD DIGITAL</Text>
                            <Text>ELABORADO  POR: Sakura Nagahama</Text>
                            <Text>APROBADO POR: Jhoel Fernandez A.</Text>
                            <Text>CORREO: admin@admin.com</Text>
                            <Text>TELÉFONO MÓVIL: 123456789</Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", fontSize: "8", border: "2px solid #000", marginTop: "5px", marginBottom: "5px", padding: "10" }}>
                        <View>
                            <Text>NOMBRE DEL PROSPECTO: Glande</Text>
                            <Text>RUC: </Text>
                            <Text>DATOS DE NEGOCIO: Podología y Estética</Text>
                            <Text>Dirección: </Text>
                        </View>
                        <View>
                            <Text>NOMBRE DEL NEGOCIO: </Text>
                            <Text>CORREO: </Text>
                            <Text>TELÉFONO: +</Text> 937722938
                        </View>
                    </View>
                    <Text style={{ fontSize: "10px" }}>PRESENTACIÓN</Text>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", fontSize: "8", border: "2px solid #000", marginBottom: "5px", padding: "10" }}>
                        <Text style={{ textAlign: "center" }}>Después de haber realizado la reunión comercial y examinado las redes sociales de la marca "Podología y Estética", el equipo de la agencia de Online JF le envía a detalle las características que contiene el paquete del servicio de gestión de redes, publicidad digital, los beneficios que te ayudarán a arrancar tu presencia en redes sociales.</Text>
                    </View>

                    <Text style={{ fontSize: "10px" }}>1. CARACTERÍSTICAS</Text>
                    <Table
                        data={[
                            { firstName: "John", lastName: "Smith", dob: new Date(2000, 1, 1), country: "Australia", phoneNumber: "xxx-0000-0000" }, { firstName: "Jane", lastName: "Doe", dob: new Date(1995, 5, 15), country: "USA", phoneNumber: "yyy-1111-1111" },
                            { firstName: "Jane", lastName: "Doe", dob: new Date(1995, 5, 15), country: "USA", phoneNumber: "yyy-1111-1111" },
                            { firstName: "Jane", lastName: "Doe", dob: new Date(1995, 5, 15), country: "USA", phoneNumber: "yyy-1111-1111" },
                            { firstName: "Jane", lastName: "Doe", dob: new Date(1995, 5, 15), country: "USA", phoneNumber: "yyy-1111-1111" },
                            { firstName: "Jane", lastName: "Doe", dob: new Date(1995, 5, 15), country: "USA", phoneNumber: "yyy-1111-1111" },
                        ]}
                    >
                        <TableHeader textAlign={"center"} fontSize={"8px"} >
                            <TableCell>
                                AREA
                            </TableCell>
                            <TableCell >
                                ITEM
                            </TableCell>
                            <TableCell>
                                DETALLE
                            </TableCell>
                            <TableCell>
                                PAQUETE 1
                            </TableCell>
                            <TableCell>
                                PAQUETE 2
                            </TableCell>
                            <TableCell>
                                PAQUETE 3
                            </TableCell>
                        </TableHeader>
                        <TableBody fontSize={"8"} textAlign='center' >
                            <DataTableCell getContent={(r) => r.firstName} />
                            <DataTableCell getContent={(r) => (
                                <View>
                                    <Text>1</Text>
                                    <Text>2</Text>
                                    <Text>3</Text>
                                </View>
                            )} />
                            <DataTableCell getContent={(r) => r.dob.toLocaleString()} />
                            <DataTableCell getContent={(r) => r.country} />
                            <DataTableCell getContent={(r) => r.phoneNumber} />
                            <DataTableCell getContent={(r) => r.phoneNumber} />
                        </TableBody>
                    </Table>
                    <Text style={{ fontSize: "10px" }}>2. DETALLE DEL SERVICIO</Text>
                    <Table data={[{
                        area: "ESTRATEGIA", item: "Estrategia del modelo del negocio", detalle: "Se realizará una reunión con el cliente para conocer el modelo de negocio, el público objetivo, los objetivos de la marca, los productos y/o servicios que ofrece, la competencia, entre otros"
                    }]}>
                        <TableBody>
                            <DataTableCell getContent={(r) => (
                                <View>
                                    <Text>{r.area}</Text>
                                    <Text>{r.item}</Text>
                                    <Text>{r.detalle}</Text>
                                </View>
                            )} />
                        </TableBody>
                    </Table>
                    <View style={styles.ViewFooter}>
                        <View style={styles.ViewItemDisplayFlex}>
                            <Text style={styles.TextCenter}>DEPÓSITO BCP SOLES</Text>
                            <Text>A NOMBRE: JHOEL FERNANDEZ ALVARADO</Text>
                            <Text>Cuenta: 193-37963785-0-55</Text>
                            <Text>Cuenta Interbancaria CCI: 193-37963785-0-55</Text>

                            <Text style={styles.TextCenter}>CUENTA EMPRESARIAL EN SOLES INTERBANK</Text>
                            <Text>A NOMBRE: JHOEL FERNANDEZ ALVARADO</Text>
                            <Text>Cuenta: 193-37963785-0-55</Text>
                            <Text>Cuenta Interbancaria CCI: 193-37963785-0-55</Text>
                        </View>
                        <View style={styles.ViewItemDisplayFlex}>
                            <Text style={styles.TextCenter}>DEPÓSITO O TRANSFERENCIA BBVA EN SOLES</Text>
                            <Text>A NOMBRE: JHOEL FERNANDEZ ALVARADO</Text>
                            <Text>Cuenta: 193-37963785-0-55</Text>
                            <Text>Cuenta Interbancaria CCI: 193-37963785-0-55</Text>

                            <Text style={styles.TextCenter}>NÚMERO PARA PAGO CON YAPE</Text>
                            <Text>A NOMBRE: JHOEL FERNANDEZ ALVARADO</Text>
                            <Text>Cuenta: 193-37963785-0-55</Text>
                            <Text>Cuenta Interbancaria CCI: 193-37963785-0-55</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

const styles = StyleSheet.create({
    Document: {
        padding: 20,
    },
    Page: {
        width: "100%",
    },
    ViewHeade: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        fontSize: 8,
    },
    ViewHeadeI: {
        border: "2px solid #000",
        padding: 10,
    },
    ViewFooter: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        fontSize: 8,
        borderBottom: "1px solid #000",
        borderTop: "1px solid #000",
        marginTop: "10px",
        padding: "2px"
    },
    ViewItemDisplayFlex: {
        width: "50%",
    },
    ViewTextFooter: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        fontSize: 8,
    },
    TextCenter: {
        textAlign: "center",
        textDecoration: "underline",
    }
})