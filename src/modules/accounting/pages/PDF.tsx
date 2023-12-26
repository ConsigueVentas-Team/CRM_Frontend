import { StyleSheet, Document, View, Text, Page } from "@react-pdf/renderer";
import React from "react";

interface Props {
  data: ProformaPDF;
}

export const PDF = React.memo(({ data }: Props) => {

  const counts = data?.personal_proyecto.reduce((acc: Record<string, number>, curr: { position: { name: string | number; }; }) => {
    acc[curr.position.name] = (acc[curr.position.name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <Document>
      <Page size="A4" style={styles.Page}>
        <View style={{ padding: "15px" }}>
          <View style={styles.ViewHeade}>
            <View style={styles.ViewHeadeI}>
              <Text style={styles.textCell}>
                RAZÓN SOCIAL: GRUPO ONLINE CONSIGUE VENTAS E.I.R.L
              </Text>
              <Text style={styles.textCell}>RUC: 20606936606</Text>
              <Text style={styles.textCell}>TELÉFONO MÓVIL: 949914249</Text>
              <Text style={styles.textCell}>
                CORREO: atención@soyjhoelfernandez.com
              </Text>
              <Text style={styles.textCell}>
                PÁGINA WEB: soyjhoelfernandez.com
              </Text>
              <Text style={styles.textCell}>
                OFICINA: Av. Brasil 2980, oficina 302, Magdalena del Mar Lima
              </Text>
              <Text style={styles.textCell}>
                PORTAFOLIO DIGITAL: https://www.behance.net/jhoelfernandez
              </Text>
            </View>
            <View style={styles.ViewHeadeI}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "center",
                  fontSize: "10px",
                  backgroundColor: "yellow",
                }}
              >
                <Text>PROFORMA {data?.invoice_number}</Text>
              </View>
              <Text style={styles.textCell}>FECHA: {data?.date}</Text>
              <Text style={styles.textCell}>REFERENCIA: {data?.reference}</Text>
              <Text style={styles.textCell}>
                ELABORADO POR: {data?.prepared_by}
              </Text>
              <Text style={styles.textCell}>
                APROBADO POR: {data?.approved_by}
              </Text>
              <Text style={styles.textCell}>CORREO: {data?.email}</Text>
              <Text style={styles.textCell}>
                TELÉFONO MÓVIL: {data?.phone_number}
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              fontSize: "8",
              border: "1px solid #000",
              marginBottom: "15px",
              padding: "8px",
            }}
          >
            <View>
              <Text style={styles.textCell}>
                NOMBRE DEL PROSPECTO: {data?.requered_by}
              </Text>
              <Text style={styles.textCell}>RUC: {data?.company.tax_id}</Text>
              <Text style={styles.textCell}>
                DATOS DE NEGOCIO: {data?.company.category}
              </Text>
              <Text style={styles.textCell}>
                DIRECCIÓN: {data?.company.office_address}
              </Text>
            </View>
            <View style={{ marginLeft: "5px" }}>
              <Text style={styles.textCell}>
                NOMBRE DEL NEGOCIO: {data?.company.business_name}
              </Text>
              <Text style={styles.textCell}>CORREO: {data?.company.email}</Text>
              <Text style={styles.textCell}>
                TELÉFONO: +51 {data?.company.phone_number}
              </Text>
            </View>
          </View>
          <View style={{ border: "1px" }}>
            <Text style={styles.textTitleBorderBotton}>PRESENTACIÓN</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                fontSize: "8",
                padding: "10",
              }}
            >
              <Text style={{ textAlign: "center" }}>
                Después de haber realizado la reunión comercial y examinado las
                redes sociales de la marca "{data?.company.category}", el equipo
                de la agencia de Online JF le envía a detalle las
                características que contiene el paquete del servicio de gestión
                de redes, publicidad digital, los beneficios que te ayudarán a
                arrancar tu presencia en redes sociales.
              </Text>
            </View>
          </View>
          <View style={stylesTable.table}>
            <Text style={styles.textTitleBorderBotton}>1. CARACTERÍSTICAS</Text>
            <View style={stylesTableCharacteristics.tableRow}>
              <View style={stylesTableCharacteristics.tableCol1}>
                <Text style={stylesTableCharacteristics.tableCellTitle}>
                  AREA
                </Text>
              </View>
              <View style={stylesTableCharacteristics.tableCol2}>
                <Text style={stylesTableCharacteristics.tableCellTitle}>
                  ITEM
                </Text>
              </View>
              <View style={stylesTableCharacteristics.tableCol3}>
                <Text style={stylesTableCharacteristics.tableCellTitle}>
                  DETALLE
                </Text>
              </View>
              <View style={stylesTableCharacteristics.tableCol4}>
                <Text style={stylesTableCharacteristics.tableCellTitle}>
                  PAQUETE 1
                </Text>
              </View>
              <View style={stylesTableCharacteristics.tableCol4}>
                <Text style={stylesTableCharacteristics.tableCellTitle}>
                  PAQUETE 2
                </Text>
              </View>
              <View style={stylesTableCharacteristics.table4Background}>
                <Text style={stylesTableCharacteristics.tableCellTitle}>
                  PAQUETE 3
                </Text>
              </View>
            </View>
            {data?.areas.map((area: ProformaPDFArea, index: number) => (
              <View key={index} style={stylesTableCharacteristics.tableRow}>
                <View style={stylesTableCharacteristics.tableCol1}>
                  <Text style={stylesTableCharacteristics.tableCell}>
                    {area.name}
                  </Text>
                </View>
                <View style={stylesTableCharacteristics.tableCol2}>
                  {area.items.map((item, index) => (
                    <Text
                      key={index}
                      style={stylesTableCharacteristics.tableCell}
                    >
                      {item.item_id}
                    </Text>
                  ))}
                </View>
                <View style={stylesTableCharacteristics.tableCol3}>
                  {area.items.map((item, index) => (
                    <Text
                      key={index}
                      style={stylesTableCharacteristics.tableCell}
                    >
                      {item.detail}
                    </Text>
                  ))}
                </View>
                <View style={stylesTableCharacteristics.tableCol4}>
                  {area.items.map((item, index) => (
                    <Text
                      key={index}
                      style={stylesTableCharacteristics.tableCell}
                    >
                      {item.package_1.value}
                    </Text>
                  ))}
                </View>
                <View style={stylesTableCharacteristics.tableCol4}>
                  {area.items.map((item, index) => (
                    <Text
                      key={index}
                      style={stylesTableCharacteristics.tableCell}
                    >
                      {item.package_2.value}
                    </Text>
                  ))}
                </View>
                <View style={stylesTableCharacteristics.table4Background}>
                  {area.items.map((item, index) => (
                    <Text
                      key={index}
                      style={stylesTableCharacteristics.tableCell}
                    >
                      {item.package_3.value}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
            <View
              style={{
                borderBottom: "1px",
                borderRight: "1px",
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  fontSize: "8px",
                  paddingRight: "20px",
                }}
              >
                RECOMENDADO
              </Text>
            </View>
          </View>
          <View style={stylesTable.table}>
            <View style={stylesTable.tableRow}>
              <View style={stylesTable.tableCol}>
                <Text style={styles.textTitleBackground}>
                  2. DETALLE DEL SERVICIO
                </Text>
              </View>
            </View>
            {data?.areas.map((area: ProformaPDFArea, index: number) => (
              <View key={index} style={stylesTable.tableRow}>
                <View style={stylesTable.tableCol}>
                  <View style={styles.textSubTitleBackground}>
                    <Text style={stylesTable.tableText}>
                      {area.area_id}. {area.name}
                    </Text>
                  </View>
                  {area.items.map((item, index) => (
                    <View key={index} style={stylesTable.tableCell}>
                      <View>
                        <Text
                          style={stylesTableDetailService.tableCellSubTitle}
                        >
                          {area.area_id}.{item.item_id} {item.detail}
                        </Text>
                        <Text style={stylesTableDetailService.tableCell}>
                          {item.description}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
          <View style={stylesTable.table}>
            <View style={stylesTable.tableRow}>
              <View style={stylesTable.tableCol}>
                <Text style={styles.textTitleBackground}>3. PRECIO</Text>
              </View>
            </View>
            <View style={stylesTable.tableRow}>
              <View style={stylesTable.tableCol}>
                <Text style={stylesTable.tableCellPrecing}>
                  {`${data?.packages[0] ? data.packages[0].note_price : ""}`}{" "}
                  PAQUETE 1
                </Text>
                <Text style={stylesTable.tableCellPrecing}>
                  {`${data?.packages[1] ? data.packages[1].note_price : ""}`}{" "}
                  PAQUETE 2
                </Text>
                <Text style={stylesTable.tableCellPrecing}>
                  {`${data?.packages[2] ? data.packages[2].note_price : ""}`}{" "}
                  PAQUETE 3
                </Text>
              </View>
              <View style={stylesTable.ColTablePrecing}>
                <Text style={stylesTable.tableCellPrecingRight}>{`s/ ${data?.packages[0] ? data.packages[0].price : "000.00"
                  }`}</Text>
                <Text style={stylesTable.tableCellPrecingRight}>{`s/ ${data?.packages[1] ? data?.packages[1].price : "000.00"
                  }`}</Text>
                <Text style={stylesTable.tableCellPrecingRight}>{`s/ ${data?.packages[2] ? data.packages[2].price : "000.00"
                  }`}</Text>
              </View>
            </View>
            <View style={stylesTable.tableRow}>
              <View style={stylesTable.tableCol}>
                <Text style={stylesTable.tableCell}>
                  NOTA: El monto mencionado no incluye IGV.
                </Text>
                <Text style={stylesTable.tableCell}>
                  * Si desea factura o boleta solicitar al área contable para la
                  entrega adicionando el IGV y si no lo desea se emitirá un RXH
                  por el servicio solicitado
                </Text>
                <Text style={stylesTable.tableCell}>
                  * El monto cotizado está basado de manera mensual
                </Text>
                <Text style={stylesTable.tableCell}>
                  * La agencia asume el transporte de sus colaboradores y
                  equipos a utilizar
                </Text>

                {/* {
                                    data?.packages.map((item, index) => (
                                        <Text key={index} style={stylesTable.tableCell}>{item.note_price}</Text>
                                    ))
                                } */}
              </View>
            </View>
            <View style={stylesTable.tableRow}>
              <View style={stylesTable.tableCol}>
                <Text style={stylesTable.tableCell}>
                  INVERSIÓN PARA LAS CAMPAÑAS DE PAGO: EL PRESUPUESTO POR DÍA
                  SEGÚN LA RED SOCIAL
                </Text>
              </View>
            </View>
            <View style={stylesTable.tableRow}>
              <View style={stylesTable.tableCol}>
                <Text style={stylesTable.tableCellPrecing}>
                  Inversión en publicidad en Facebook e Ig minimo 7 dias a costo
                  de 30 a 50 por dia
                </Text>
                <Text style={stylesTable.tableCellPrecing}>
                  TikTok el monto mínimo son 50 soles por dia, la cual la
                  plataforma te pide minimo 10 dias
                </Text>
                <Text style={stylesTable.tableCellPrecing}>
                  Googles ads la recomendacion seria el monto mínimo 50 soles
                  por dia minimo 7 dias
                </Text>
              </View>
              <View style={stylesTable.ColTablePrecing}>
                <Text style={stylesTable.tableCellPrecingRight}>{`s/ ${data?.packages[0] ? data.packages[0].price : "000.00"
                  }`}</Text>
                <Text style={stylesTable.tableCellPrecingRight}>{`s/ ${data?.packages[1] ? data?.packages[1].price : "000.00"
                  }`}</Text>
                <Text style={stylesTable.tableCellPrecingRight}>{`s/ ${data?.packages[2] ? data.packages[2].price : "000.00"
                  }`}</Text>
              </View>
            </View>
          </View>
          <View style={stylesTable.table}>
            <View style={stylesTable.tableRow}>
              <View style={stylesTable.tableCol}>
                <Text style={styles.textTitleBackground}>
                  6. PERSONAL DEL PROYECTO
                </Text>
              </View>
            </View>
            {data?.personal_proyecto.map(
              (item: ProformaPDFPersonal, index: number) => (
                <View key={index} style={stylesTable.tableRow}>
                  <View style={stylesTable.tableCol}>
                    <Text style={stylesTable.tableCell}>
                      {`${counts[item.position.name]} ${item.position.name}`}
                    </Text>
                  </View>
                </View>
              )
            )}
          </View>
          <View style={stylesTable.table}>
            <View style={stylesTable.tableRow}>
              <View style={stylesTable.tableCol}>
                <Text style={styles.textTitleBackground}>
                  7. TIEMPO DE TRABAJO
                </Text>
              </View>
            </View>
            <View style={stylesTable.tableRow}>
              <View style={stylesTable.tableCol}>
                <Text style={stylesTable.tableCell}>{data?.work_time}</Text>
              </View>
            </View>
          </View>
          <View style={stylesTable.table}>
            <View style={stylesTable.tableRow}>
              <View style={stylesTable.tableCol}>
                <Text style={styles.textTitleBackground}>8. OBSERVACIONES</Text>
              </View>
            </View>
            {data?.observations.map(
              (item: ProformaPDFObservation, index: number) => (
                <View key={index} style={stylesTable.tableRow}>
                  <View style={stylesTable.tableCol}>
                    <Text style={stylesTable.tableCell}>
                      {item.description}
                    </Text>
                  </View>
                </View>
              )
            )}
          </View>
          <View style={stylesTable.table}>
            <View style={stylesTable.tableRow}>
              <View style={stylesTable.tableCol}>
                <Text style={styles.textTitleBackground}>
                  9. CONDICIONES DE PAGO
                </Text>
              </View>
            </View>
            <View style={stylesTable.tableRow}>
              <View style={stylesTable.tableCol}>
                <Text style={stylesTable.tableCell}>
                  **FORMA DE PAGO: PARA COMENZAR EL PROYECTO SE PAGARÁ EL 50% DE
                  INICIAR Y 50% A LOS 20 DÍAS DE LAS PRIMERA REUNIÓN VIRTUAL CON
                  LA MARCA
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.ViewFooter}>
            <View style={styles.ViewItemDisplayFlex}>
              <Text style={styles.TextCenter}>DEPÓSITO BCP SOLES</Text>
              <View style={styles.TextDetailItem}>
                <View>
                  <Text style={styles.textCell}>A NOMBRE:</Text>
                  <Text style={styles.textCell}>Cuenta:</Text>
                  <Text style={styles.textCell}>Cuenta Interbancaria CCI:</Text>
                </View>
                <View style={{ marginLeft: "5px" }}>
                  <Text style={styles.textCell}>JHOEL FERNANDEZ ALVARADO</Text>
                  <Text style={styles.textCell}>193-37963785-0-55</Text>
                  <Text style={styles.textCell}>00219313796378505510</Text>
                </View>
              </View>

              <Text style={styles.TextCenter}>
                CUENTA EMPRESARIAL EN SOLES INTERBANK
              </Text>
              <View style={styles.TextDetailItem}>
                <View>
                  <Text style={styles.textCell}>A NOMBRE:</Text>
                  <Text style={styles.textCell}>Cuenta:</Text>
                  <Text style={styles.textCell}>Cuenta Interbancaria CCI:</Text>
                </View>
                <View style={{ marginLeft: "5px" }}>
                  <Text style={styles.textCell}>JHOEL FERNANDEZ ALVARADO</Text>
                  <Text style={styles.textCell}>8983339398889</Text>
                  <Text style={styles.textCell}>00389801333939888943</Text>
                </View>
              </View>
            </View>
            <View style={styles.ViewItemDisplayFlex}>
              <Text style={styles.TextCenter}>
                DEPÓSITO O TRANSFERENCIA BBVA EN SOLES
              </Text>
              <View style={styles.TextDetailItem}>
                <View>
                  <Text style={styles.textCell}>A NOMBRE:</Text>
                  <Text style={styles.textCell}>Cuenta:</Text>
                  <Text style={styles.textCell}>Cuenta Interbancaria CCI:</Text>
                </View>
                <View style={{ marginLeft: "5px" }}>
                  <Text style={styles.textCell}>JHOEL FERNANDEZ ALVARADO</Text>
                  <Text style={styles.textCell}>0011-0814-0210802148-12</Text>
                  <Text style={styles.textCell}>0011-814-000210802148-12</Text>
                </View>
              </View>
              <Text style={styles.TextCenter}>NÚMERO PARA PAGO CON YAPE</Text>
              <View style={styles.TextDetailItem}>
                <View>
                  <Text style={styles.textCell}>A NOMBRE:</Text>
                  <Text style={styles.textCell}>Número:</Text>
                </View>
                <View style={{ marginLeft: "52px" }}>
                  <Text style={styles.textCell}>JHOEL FERNANDEZ ALVARADO</Text>
                  <Text style={styles.textCell}>949914249</Text>
                </View>

              </View>
              <Text style={styles.textCell}>
                *Importante se debe mandar los comprobantes de pago al asesor
                comercial para confirmar el pago
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
});

const styles = StyleSheet.create({
  Document: {},
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
    width: "48%",
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
    fontSize: 9,
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
    padding: "2px",
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
});

const stylesTable = StyleSheet.create({
  table: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: "10px",
    marginBotton: "5px",
  },
  tableCancelarMarginTop: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginBotton: "5px",
    marginTop: "5px",
  },
  tableRow: {
    width: "100%",
    flexDirection: "row",
  },
  tableCol: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
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
    borderTopWidth: 0,
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
  },
});

const stylesTableCharacteristics = StyleSheet.create({
  table: {
    display: "none",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "16.6666%", // 100% / 6 columns
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol1: {
    width: "7%", // 100% / 6 columns
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol2: {
    width: "3%", // 100% / 6 columns
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol3: {
    width: "30%", // 100% / 6 columns
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol4: {
    width: "20%", // 100% / 6 columns
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  table4Background: {
    width: "20%", // 100% / 6 columns
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: "rgb( 135, 206, 250, 1)",
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 6,
  },
  tableCellTitle: {
    margin: "auto",
    fontSize: 7,
    paddingTop: 2,
    paddingBottom: 2,
  },
});

const stylesTableDetailService = StyleSheet.create({
  tableCellSubTitle: {
    marginTop: 2,
    fontSize: 7,
  },
  tableCell: {
    marginTop: 2,
    fontSize: 6,
  },
});
