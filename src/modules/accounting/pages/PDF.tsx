import { StyleSheet, Document, View, Text, Page } from '@react-pdf/renderer'

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