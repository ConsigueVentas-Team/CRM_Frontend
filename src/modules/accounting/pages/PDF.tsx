import { StyleSheet, Document, View, Text, Page } from '@react-pdf/renderer'
import { dataExample } from '../data/dataExample'

export function PDF() {
    return (
        <Document>
            <Page size="A4" style={styles.Page}>
                <View style={{ padding: "15px" }}>
                    <View style={styles.ViewHeade}>
                        <View style={styles.ViewHeadeI}>
                            <Text style={styles.textCell}>RAZÓN SOCIAL: GRUPO ONLINE CONSIGUE VENTAS E.I.R.L</Text>
                            <Text style={styles.textCell}>RUC: 20606936606</Text>
                            <Text style={styles.textCell}>TELÉFONO MÓVIL: 949914249</Text>
                            <Text style={styles.textCell}>CORREO: atención@soyjhoelfernandez.com</Text>
                            <Text style={styles.textCell}>PÁGINA WEB: soyjhoelfernandez.com</Text>
                            <Text style={styles.textCell}>OFICINA: Av. Brasil 2980, oficina 302, Magdalena del Mar Lima</Text>
                            <Text style={styles.textCell}>PORTAFOLIO DIGITAL: https://www.bahance.net/jhoelfernandez</Text>
                        </View>
                        <View style={styles.ViewHeadeI}>
                            <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", fontSize: "10px", backgroundColor: "yellow" }}>
                                <Text>PROFORMA N° 132</Text>
                            </View>
                            <Text style={styles.textCell}>FECHA: 01/12/2023</Text>
                            <Text style={styles.textCell}>REFERENCIA: SERVICIO GESTIÓN DE REDES - PUBLICIDAD DIGITAL</Text>
                            <Text style={styles.textCell}>ELABORADO  POR: Sakura Nagahama</Text>
                            <Text style={styles.textCell}>APROBADO POR: Jhoel Fernandez A.</Text>
                            <Text style={styles.textCell}>CORREO: admin@admin.com</Text>
                            <Text style={styles.textCell}>TELÉFONO MÓVIL: 123456789</Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", fontSize: "8", border: "1px solid #000", marginBottom: "15px", padding: "8px" }}>
                        <View>
                            <Text style={styles.textCell}>NOMBRE DEL PROSPECTO: Glande</Text>
                            <Text style={styles.textCell}>RUC: </Text>
                            <Text style={styles.textCell}>DATOS DE NEGOCIO: Podología y Estética</Text>
                            <Text style={styles.textCell}>DIRECCIÓN: </Text>
                        </View>
                        <View style={{ marginLeft: "5px" }}>
                            <Text style={styles.textCell}>NOMBRE DEL NEGOCIO: </Text>
                            <Text style={styles.textCell}>CORREO: </Text>
                            <Text style={styles.textCell}>TELÉFONO: +51 937722938</Text>
                        </View>
                    </View>
                    <View style={{ border: "1px" }}>
                        <Text style={styles.textTitleBorderBotton}>PRESENTACIÓN</Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", fontSize: "8", padding: "10" }}>
                            <Text style={{ textAlign: "center" }}>Después de haber realizado la reunión comercial y examinado las redes sociales de la marca "Podología y Estética", el equipo de la agencia de Online JF le envía a detalle las características que contiene el paquete del servicio de gestión de redes, publicidad digital, los beneficios que te ayudarán a arrancar tu presencia en redes sociales.</Text>
                        </View>
                    </View>


                    <View style={stylesTable.table}>
                        <Text style={styles.textTitleBorderBotton}>1. CARACTERÍSTICAS</Text>
                        <View style={stylesTableCharacteristics.tableRow}>
                            <View style={stylesTableCharacteristics.tableCol1}>
                                <Text style={stylesTableCharacteristics.tableCellTitle}>AREA</Text>
                            </View>
                            <View style={stylesTableCharacteristics.tableCol2}>
                                <Text style={stylesTableCharacteristics.tableCellTitle}>ITEM</Text>
                            </View>
                            <View style={stylesTableCharacteristics.tableCol3}>
                                <Text style={stylesTableCharacteristics.tableCellTitle}>DETALLE</Text>
                            </View>
                            <View style={stylesTableCharacteristics.tableCol4}>
                                <Text style={stylesTableCharacteristics.tableCellTitle}>PAQUETE 1</Text>
                            </View>
                            <View style={stylesTableCharacteristics.tableCol4}>
                                <Text style={stylesTableCharacteristics.tableCellTitle}>PAQUETE 2</Text>
                            </View>
                            <View style={stylesTableCharacteristics.table4Background}>
                                <Text style={stylesTableCharacteristics.tableCellTitle}>PAQUETE 3</Text>
                            </View>
                        </View>

                        {
                            dataExample.map((area, index) => (
                                <View key={index} style={stylesTableCharacteristics.tableRow}>
                                    <View style={stylesTableCharacteristics.tableCol1}>
                                        <Text style={stylesTableCharacteristics.tableCell}>{area.area}</Text>
                                    </View>
                                    <View style={stylesTableCharacteristics.tableCol2}>
                                        {
                                            area.items.map((item, index) => (
                                                <Text key={index} style={stylesTableCharacteristics.tableCell}>{item.item}</Text>
                                            ))
                                        }
                                    </View>
                                    <View style={stylesTableCharacteristics.tableCol3}>
                                        {
                                            area.items.map((item, index) => (
                                                <Text key={index} style={stylesTableCharacteristics.tableCell}>{item.detalle}</Text>
                                            ))
                                        }
                                    </View>
                                    <View style={stylesTableCharacteristics.tableCol4}>
                                        {
                                            area.items.map((item, index) => (
                                                <Text key={index} style={stylesTableCharacteristics.tableCell}>{item.paquete1}</Text>
                                            ))
                                        }
                                    </View>
                                    <View style={stylesTableCharacteristics.tableCol4}>
                                        {
                                            area.items.map((item, index) => (
                                                <Text key={index} style={stylesTableCharacteristics.tableCell}>{item.paquete2}</Text>
                                            ))
                                        }
                                    </View>
                                    <View style={stylesTableCharacteristics.table4Background}>
                                        {
                                            area.items.map((item, index) => (
                                                <Text key={index} style={stylesTableCharacteristics.tableCell}>{item.paquete3}</Text>
                                            ))
                                        }
                                    </View>
                                </View>
                            ))
                        }
                        <View style={{
                            borderBottom: "1px",
                            borderRight: "1px",
                        }}>
                            <Text style={{ textAlign: "right", fontSize: "8px", paddingRight: "20px" }}>RECOMENDADO</Text>
                        </View>
                    </View>

                    
                    <View style={stylesTable.table}>
                        <View style={stylesTable.tableRow}>
                            <View style={stylesTable.tableCol}>
                                <Text style={styles.textTitleBackground}>2. DETALLE DEL SERVICIO</Text>
                            </View>
                        </View>
                        {
                            [1, 2, 3].map((item, index) => (
                                <View key={index} style={stylesTable.tableRow}>
                                    <View style={stylesTable.tableCol}>
                                        <View style={styles.textSubTitleBackground}>
                                            <Text style={stylesTable.tableText}>{item + "AREA"}</Text>

                                        </View>
                                        {
                                            [1, 2, 3].map((item, index) => (
                                                <View key={index} style={stylesTable.tableCell}>
                                                    <View>
                                                        <Text style={stylesTableDetailService.tableCell}>{item + "ITEM"}</Text>
                                                        <Text style={stylesTableDetailService.tableCell}>{item + "detalle esto va en minúscula"}</Text>
                                                    </View>
                                                </View>
                                            ))
                                        }
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                    
                    <View style={stylesTable.table}>
                        <View style={stylesTable.tableRow}>
                            <View style={stylesTable.tableCol}>
                                <Text style={styles.textTitleBackground}>3. PRECIO</Text>
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
                    
                    <View style={stylesTable.table}>
                        <View style={stylesTable.tableRow}>
                            <View style={stylesTable.tableCol}>
                                <Text style={styles.textTitleBackground}>6. PERSONAL DEL PROYECTO</Text>
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
                    
                    <View style={stylesTable.table}>
                        <View style={stylesTable.tableRow}>
                            <View style={stylesTable.tableCol}>
                                <Text style={styles.textTitleBackground}>7. TIEMPO DE TRABAJO</Text>
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

                    
                    <View style={stylesTable.table}>
                        <View style={stylesTable.tableRow}>
                            <View style={stylesTable.tableCol}>
                                <Text style={styles.textTitleBackground}>8. OBSERVACIONES</Text>
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


                    <View style={stylesTable.table}>
                        <View style={stylesTable.tableRow}>
                            <View style={stylesTable.tableCol}>
                                <Text style={styles.textTitleBackground}>9. CONDICIONES DE PAGO</Text>
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
    },
    Page: {
        padding: "20px",
    },
    ViewHeade: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        fontSize: 8,
        marginBottom: "15px",
    },
    ViewHeadeI: {
        border: "1px solid #000",
        padding: 5,
    },
    textCell: {
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 2,
        marginRight: 2,
        fontSize: 8,
    },
    textTitleBorderBotton: {
        backgroundColor: "rgb(255,165,0, 0.5)",
        borderBottom: "1px",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 2,
        paddingRight: 2,
        fontSize: 9
    },
    textSubTitleBackground: {
        backgroundColor: "rgb( 135, 206, 250, 0.5)",
        width: "100%",
    },
    textTitleBackground: {
        backgroundColor: "rgb(255,165,0, 0.5)",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 2,
        paddingRight: 2,
        fontSize: 9,
    }
    ,
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
        marginTop: "10px",
        marginBotton: "5px"
    },
    tableCancelarMarginTop: {
        display: "flex",
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        marginBotton: "5px",
        marginTop: "5px"
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
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 2,
        paddingBottom: 2,
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
    }, tableCol: {
        width: '16.6666%', // 100% / 6 columns
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableCol1: {
        width: '7%', // 100% / 6 columns
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    }, tableCol2: {
        width: '3%', // 100% / 6 columns
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    }, tableCol3: {
        width: '30%', // 100% / 6 columns
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    }, tableCol4: {
        width: '20%', // 100% / 6 columns
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    table4Background: {
        width: '20%', // 100% / 6 columns
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        backgroundColor: "rgb( 135, 206, 250, 1)",
    },
    tableCell: {
        margin: 'auto',
        marginTop: 5,
        fontSize: 6,
    },
    tableCellTitle: {
        margin: 'auto',
        fontSize: 7,
        paddingTop: 2,
        paddingBottom: 2,
    },
})

const stylesTableDetailService = StyleSheet.create({
    tableCell: {
        marginTop: 2,
        fontSize: 6,
    }
})