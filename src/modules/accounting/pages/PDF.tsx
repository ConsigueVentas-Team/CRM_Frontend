import { StyleSheet, Document, View, Text, Page } from '@react-pdf/renderer'

export function PDF() {
    const dataExample = [{
        area: "Publicidad",
        items: [{
            item: 1,
            detalle: "Creación de contenido para las redes sociales",
            paquete1: "X",
            paquete2: "X",
            paquete3: "X",
        }, {
            item: 2,
            detalle: "Creación de contenido para las redes sociales",
            paquete1: "X",
            paquete2: "X",
            paquete3: "X",
        }, {
            item: 3,
            detalle: "Creación de contenido para las redes sociales",
            paquete1: "X",
            paquete2: "X",
            paquete3: "X",
        }]
    },
    {
        area: "Diseño",
        items: [{
            item: 1,
            detalle: "Creación de contenido para las redes sociales",
            paquete1: "-",
            paquete2: "-",
            paquete3: "-",
        }, {
            item: 2,
            detalle: "Creación de contenido para las redes sociales",
            paquete1: "-",
            paquete2: "-",
            paquete3: "-",
        }, {
            item: 3,
            detalle: "Creación de contenido para las redes sociales",
            paquete1: "-",
            paquete2: "-",
            paquete3: "-",
        }]
    }]

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
                            <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", fontSize: "10px" }}>
                                <Text>PROFORMA N° 132</Text>
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
                        <View style={{ marginLeft: "5px" }}>
                            <Text>NOMBRE DEL NEGOCIO: </Text>
                            <Text>CORREO: </Text>
                            <Text>TELÉFONO: +51 937722938</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 9 }}>PRESENTACIÓN</Text>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", fontSize: "8", border: "2px solid #000", marginBottom: "5px", padding: "10" }}>
                        <Text style={{ textAlign: "center" }}>Después de haber realizado la reunión comercial y examinado las redes sociales de la marca "Podología y Estética", el equipo de la agencia de Online JF le envía a detalle las características que contiene el paquete del servicio de gestión de redes, publicidad digital, los beneficios que te ayudarán a arrancar tu presencia en redes sociales.</Text>
                    </View>

                    // 1. CARACTERÍSTICAS
                    <Text style={stylesTable.tableCell}>1. CARACTERÍSTICAS</Text>
                    <View style={stylesTable.table}>
                        <View style={stylesTableCharacteristics.tableRow}>
                            <View style={stylesTableCharacteristics.tableCol}>
                                <Text style={stylesTableCharacteristics.tableCell}>Area</Text>
                            </View>
                            <View style={stylesTableCharacteristics.tableCol}>
                                <Text style={stylesTableCharacteristics.tableCell}>Item</Text>
                            </View>
                            <View style={stylesTableCharacteristics.tableCol}>
                                <Text style={stylesTableCharacteristics.tableCell}>Description</Text>
                            </View>
                            <View style={stylesTableCharacteristics.tableCol}>
                                <Text style={stylesTableCharacteristics.tableCell}>Column 4</Text>
                            </View>
                            <View style={stylesTableCharacteristics.tableCol}>
                                <Text style={stylesTableCharacteristics.tableCell}>Column 5</Text>
                            </View>
                            <View style={stylesTableCharacteristics.tableCol}>
                                <Text style={stylesTableCharacteristics.tableCell}>Column 6</Text>
                            </View>
                        </View>

                        {
                            dataExample.map((area, index) => (
                                <View key={index} style={stylesTableCharacteristics.tableRow}>
                                    <View style={stylesTableCharacteristics.tableCol}>
                                        <Text style={stylesTableCharacteristics.tableCell}>Area 1</Text>
                                    </View>
                                    <View style={stylesTableCharacteristics.tableCol}>
                                        {
                                            area.items.map((item, index) => (
                                                <Text key={index} style={stylesTableCharacteristics.tableCell}>{item.item}</Text>
                                            ))
                                        }
                                    </View>
                                    <View style={stylesTableCharacteristics.tableCol}>
                                        {
                                            area.items.map((item, index) => (
                                                <Text key={index} style={stylesTableCharacteristics.tableCell}>{item.detalle}</Text>
                                            ))
                                        }
                                    </View>
                                    <View style={stylesTableCharacteristics.tableCol}>
                                        {
                                            area.items.map((item, index) => (
                                                <Text key={index} style={stylesTableCharacteristics.tableCell}>{item.paquete1}</Text>
                                            ))
                                        }
                                    </View>
                                    <View style={stylesTableCharacteristics.tableCol}>
                                        {
                                            area.items.map((item, index) => (
                                                <Text key={index} style={stylesTableCharacteristics.tableCell}>{item.paquete2}</Text>
                                            ))
                                        }
                                    </View>
                                    <View style={stylesTableCharacteristics.tableCol}>
                                        {
                                            area.items.map((item, index) => (
                                                <Text key={index} style={stylesTableCharacteristics.tableCell}>{item.paquete3}</Text>
                                            ))
                                        }
                                    </View>
                                </View>
                            ))
                        }

                    </View>
                    // 2. DETALLE DEL SERVICIO
                    <View style={stylesTable.table}>
                        <View style={stylesTable.tableRow}>
                            <View style={stylesTable.tableCol}>
                                <Text style={stylesTable.tableCell}>2. DETALLE DEL SERVICIO</Text>
                            </View>
                        </View>
                        {
                            [1, 2, 3].map((item, index) => (
                                <View key={index} style={stylesTable.tableRow}>
                                    <View style={stylesTable.tableCol}>
                                        <Text style={stylesTable.tableText}>{item + "AREA"}</Text>
                                        {
                                            [1, 2, 3].map((item, index) => (
                                                <View key={index} style={stylesTable.tableCell}>
                                                    <View>
                                                        <Text>{item + "ITEM"}</Text>
                                                        <Text>{item + "DETALLE"}</Text>
                                                    </View>
                                                </View>
                                            ))
                                        }
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                    // 3. PRECIO
                    <View style={stylesTable.table}>
                        <View style={stylesTable.tableRow}>
                            <View style={stylesTable.tableCol}>
                                <Text style={stylesTable.tableCell}>3. PRECIO</Text>
                            </View>
                        </View>
                        <View style={stylesTable.tableRow}>
                            <View style={stylesTable.tableCol}>
                                <Text style={stylesTable.tableCellPrecing}>Publicidad + creación de contenido + gestión de redes + trabajo virtual PAQUETE 1</Text>
                                <Text style={stylesTable.tableCellPrecing}>Publicidad + creación de contenido + gestión de redes + trabajo virtual PAQUETE 2</Text>
                                <Text style={stylesTable.tableCellPrecing}>Publicidad + creacion de contenido + gestión de redes + más VISITA presencial para las fotos y videos para los contenidos PAQUETE 3</Text>
                            </View>
                            <View style={stylesTable.ColTablePrecing}>
                                <Text style={stylesTable.tableCellPrecingRight}>s/.650,00</Text>
                                <Text style={stylesTable.tableCellPrecingRight}>s/.850,00</Text>
                                <Text style={stylesTable.tableCellPrecingRight}>s/.1.000,00</Text>
                            </View>
                        </View>
                        <View style={stylesTable.tableRow}>
                            <View style={stylesTable.tableCol}>
                                <Text style={stylesTable.tableCell}>NOTA: </Text>
                            </View>
                        </View>
                    </View>
                    // 6. PERSONAL DEL PROYECTO
                    <View style={stylesTable.table}>
                        <View style={stylesTable.tableRow}>
                            <View style={stylesTable.tableCol}>
                                <Text style={stylesTable.tableCell}>8. PERSONAL DEL PROYECTO</Text>
                            </View>
                        </View>
                        {
                            [1, 2, 3, 4, 5, 6].map((item, index) => (
                                <View key={index} style={stylesTable.tableRow}>
                                    <View style={stylesTable.tableCol}>
                                        <Text style={stylesTable.tableCell}>**EL PRECIO NO INCLUYE IGV</Text>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                    // 7. TIEMPO DE TRABAJO
                    <View style={stylesTable.table}>
                        <View style={stylesTable.tableRow}>
                            <View style={stylesTable.tableCol}>
                                <Text style={stylesTable.tableCell}>8. TIEMPO DE TRABAJO</Text>
                            </View>
                        </View>
                        {
                            [1].map((item, index) => (
                                <View key={index} style={stylesTable.tableRow}>
                                    <View style={stylesTable.tableCol}>
                                        <Text style={stylesTable.tableCell}>**EL PRECIO NO INCLUYE IGV</Text>
                                    </View>
                                </View>
                            ))
                        }
                    </View>

                    // 8. OBSERVACIONES
                    <View style={stylesTable.table}>
                        <View style={stylesTable.tableRow}>
                            <View style={stylesTable.tableCol}>
                                <Text style={stylesTable.tableCell}>8. OBSERVACIONES</Text>
                            </View>
                        </View>
                        {
                            [1, 2, 3].map((item, index) => (
                                <View key={index} style={stylesTable.tableRow}>
                                    <View style={stylesTable.tableCol}>
                                        <Text style={stylesTable.tableCell}>**EL PRECIO NO INCLUYE IGV</Text>
                                    </View>
                                </View>
                            ))
                        }
                    </View>

                    // 9. CONDICIONES DE PAGO
                    <View style={stylesTable.table}>
                        <View style={stylesTable.tableRow}>
                            <View style={stylesTable.tableCol}>
                                <Text style={stylesTable.tableCell}>9. CONDICIONES DE PAGO</Text>
                            </View>
                        </View>
                        <View style={stylesTable.tableRow}>
                            <View style={stylesTable.tableCol}>
                                <Text style={stylesTable.tableCell}>**FORMA DE PAGO: PARA COMENZAR EL PROYECTO SE PAGARÁ EL 50% DE INICIAR Y 50% A LOS 20 DÍAS DE LAS PRIMERA REUNIÓN VIRTUAL CON LA MARCA</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.ViewFooter}>
                        <View style={styles.ViewItemDisplayFlex}>
                            <Text style={styles.TextCenter}>DEPÓSITO BCP SOLES</Text>
                            <View style={styles.TextDetailItem}>
                                <View>
                                    <Text>A NOMBRE:</Text>
                                    <Text>Cuenta:</Text>
                                    <Text>Cuenta Interbancaria CCI:</Text>
                                </View>
                                <View style={{ marginLeft: "5px" }}>
                                    <Text>JHOEL FERNANDEZ ALVARADO</Text>
                                    <Text>193-37963785-0-55</Text>
                                    <Text>193-37963785-0-55</Text>
                                </View>
                            </View>

                            <Text style={styles.TextCenter}>CUENTA EMPRESARIAL EN SOLES INTERBANK</Text>
                            <View style={styles.TextDetailItem}>
                                <View>
                                    <Text>A NOMBRE:</Text>
                                    <Text>Cuenta:</Text>
                                    <Text>Cuenta Interbancaria CCI:</Text>
                                </View>
                                <View style={{ marginLeft: "5px" }}>
                                    <Text>JHOEL FERNANDEZ ALVARADO</Text>
                                    <Text>193-37963785-0-55</Text>
                                    <Text>193-37963785-0-55</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.ViewItemDisplayFlex}>
                            <Text style={styles.TextCenter}>DEPÓSITO O TRANSFERENCIA BBVA EN SOLES</Text>
                            <View style={styles.TextDetailItem}>
                                <View>
                                    <Text>A NOMBRE:</Text>
                                    <Text>Cuenta:</Text>
                                    <Text>Cuenta Interbancaria CCI:</Text>
                                </View>
                                <View style={{ marginLeft: "5px" }}>
                                    <Text>JHOEL FERNANDEZ ALVARADO</Text>
                                    <Text>193-37963785-0-55</Text>
                                    <Text>193-37963785-0-55</Text>
                                </View>
                            </View>
                            <Text style={styles.TextCenter}>NÚMERO PARA PAGO CON YAPE</Text>
                            <View style={styles.TextDetailItem}>
                                <View>
                                    <Text>A NOMBRE:</Text>
                                    <Text>Cuenta:</Text>
                                    <Text>Cuenta Interbancaria CCI:</Text>
                                </View>
                                <View style={{ marginLeft: "5px" }}>
                                    <Text>JHOEL FERNANDEZ ALVARADO</Text>
                                    <Text>193-37963785-0-55</Text>
                                    <Text>193-37963785-0-55</Text>
                                </View>
                            </View>
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
        paddingBottom: "5px",
        marginTop: "5px",
    },
    TextDetailItem: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        fontSize: 8,
    },
})

const stylesTable = StyleSheet.create({
    table: {
        display: "flex",
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        marginTop: "5px",
        marginBotton: "5px"
    },
    tableRow: {
        width: "100%",
        flexDirection: "row"
    },
    tableCol: {
        width: "100%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableCell: {
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 2,
        marginRight: 2,
        fontSize: 8,
    },
    tableText: {
        width: "100%",
        border: "1px solid #000",
        borderTop: 0,
        borderRight: 0,
        borderLeft: 0,
        fontSize: 8,
    },
    ColTablePrecing: {
        width: "30%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableCellPrecingRight: {
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 2,
        marginRight: 2,
        fontSize: 8,
        textAlign: "left",
    },
    tableCellPrecing: {
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 2,
        marginRight: 2,
        fontSize: 8,
        textAlign: "right",
    }

})

const stylesTableCharacteristics = StyleSheet.create({
    table: {
        display: 'none',
        width: 'auto',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: {
        margin: 'auto',
        flexDirection: 'row',
    },
    tableCol: {
        width: '16.666%', // 100% / 6 columns
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableCell: {
        margin: 'auto',
        marginTop: 5,
        fontSize: 10,
    },
});