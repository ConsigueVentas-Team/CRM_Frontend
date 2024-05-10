import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Link,
} from "@react-pdf/renderer";
/*import { sales } from "../components/management/data";*/
import { Sale, SaleDetailProduct, SaleDetailService } from "@/types/sale";
import { useFetchSales } from "../hooks/useFetchSales";
import { PDFSaleDetailstyles, Watermark } from "../styles/PDFstyles";

const titlePageStyles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#F0F4F8",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: "#333", // Añade el color que prefieras para el título
  }
});

const PDFPreview = () => {

  const salesData = useFetchSales();

  if (!salesData) {
    return <div>Cargando...</div>;
  }

  const { sales, productData, serviceData } = salesData;

  
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Document title="Detalle_Ventas" author="Consigue_Ventas">
      {sales.map((sale: Sale, index: number) => {
           const items = [
            ...productData?.filter((p: SaleDetailProduct) => p.sale_obj.saleID === sale.saleID).map((p: SaleDetailProduct) => ({
              ...p, type: 'Producto', name: p.product.name, brand: p.product.brand, description: p.product.description
            })),
            ...serviceData?.filter((s: SaleDetailService) => s.sale.saleID === sale.saleID).map((s: SaleDetailService) => ({
              ...s, type: 'Servicio', name: s.service.name, description: s.service.description
            }))
          ];
          return (
        <Page size="A4" style={PDFSaleDetailstyles.page}>
          <Watermark />
          <View style={PDFSaleDetailstyles.headerContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={PDFSaleDetailstyles.logo}
                src="/public/crm-logo-noBackground.png"
              ></Image>{" "}
              // Asegúrate de que la ruta es correcta
              <View>
                <Text style={PDFSaleDetailstyles.title}>Consigue Ventas</Text>
                <Text style={PDFSaleDetailstyles.smallText}>
                  AGENCIA DE EMBUDO DE VENTAS ONLINE
                </Text>
                <Text style={PDFSaleDetailstyles.smallText}>
                  ORIENTADA AL DESARROLLO DE ESTRATEGIAS DIGITALES
                </Text>
              </View>
            </View>
            <View style={PDFSaleDetailstyles.headerRight}>
              <Text style={PDFSaleDetailstyles.smallText}>
                R.U.C. 123456789
              </Text>
              <Text style={PDFSaleDetailstyles.smallText}>
                Teléfono: 949-914-249
              </Text>
              <Link
                href="http://www.consigueventas.com"
                style={PDFSaleDetailstyles.smallText}
              >
                Sitio Web
              </Link>
            </View>
          </View>

          <View>
            <View style={PDFSaleDetailstyles.row}>
              <Text style={PDFSaleDetailstyles.boldText}>
                Cliente: {sale.customer.name}{" "}
                {sale.customer.lastname}
              </Text>
              <Text style={PDFSaleDetailstyles.smallText}>
                Celular: {sale.customer.phone}
              </Text>
            </View>
            <View style={PDFSaleDetailstyles.row}>
              <Text style={PDFSaleDetailstyles.smallText}>
                Dirección: {sale.customer.address}
              </Text>
              <Text style={PDFSaleDetailstyles.smallText}>
                Tipo de Pago: {getPaymentType(sale.paymentType)}
              </Text>
            </View>
            <View style={PDFSaleDetailstyles.row}>
              <Text style={PDFSaleDetailstyles.smallText}>
                DNI: {sale.customer.document_number}
              </Text>
            </View>
            <View style={PDFSaleDetailstyles.row}>
              <Text style={PDFSaleDetailstyles.smallText}>
                Fecha: {sale.date}
              </Text>
            </View>
          </View>

          <View style={PDFSaleDetailstyles.table}>
            <View style={PDFSaleDetailstyles.tableRow}>
              <View
                style={{ ...PDFSaleDetailstyles.tableColHeader, width: "10%" }}
              >
                <Text style={PDFSaleDetailstyles.tableCellHeader}>Item</Text>
              </View>
              <View
                style={{ ...PDFSaleDetailstyles.tableColHeader, width: "15%" }}
              >
                <Text style={PDFSaleDetailstyles.tableCellHeader}>
                  Categoria
                </Text>
              </View>
              <View
                style={{
                  ...PDFSaleDetailstyles.tableColHeader,
                  width: "12.5%",
                }}
              >
                <Text style={PDFSaleDetailstyles.tableCellHeader}>
                  Cantidad
                </Text>
              </View>
              <View
                style={{
                  ...PDFSaleDetailstyles.tableColHeader,
                  width: "37.5%",
                }}
              >
                <Text style={PDFSaleDetailstyles.tableCellHeader}>
                  Descripción
                </Text>
              </View>
              <View
                style={{
                  ...PDFSaleDetailstyles.tableColHeader,
                  width: "12.5%",
                }}
              >
                <Text style={PDFSaleDetailstyles.tableCellHeader}>
                  Precio Unitario
                </Text>
              </View>
              <View
                style={{
                  ...PDFSaleDetailstyles.tableColHeader,
                  width: "12.5%",
                }}
              >
                <Text style={PDFSaleDetailstyles.tableCellHeader}>
                  Importe Total
                </Text>
              </View>
            </View>

            {items.map((item, index) => (
                <View
                  style={PDFSaleDetailstyles.tableRow}
                  key={index}
                >
                  <View
                    style={{ ...PDFSaleDetailstyles.tableCol, width: "10%" }}
                  >
                    <Text style={PDFSaleDetailstyles.tableCell}>
                      {index + 1}
                    </Text>
                  </View>
                  <View
                    style={{ ...PDFSaleDetailstyles.tableCol, width: "15%" }}
                  >
                    <Text style={PDFSaleDetailstyles.tableCell}>PRODUCTO</Text>
                  </View>
                  <View
                    style={{ ...PDFSaleDetailstyles.tableCol, width: "12.5%" }}
                  >
                    <Text style={PDFSaleDetailstyles.tableCell}>
                      {item.quantity}
                    </Text>
                  </View>
                  <View
                    style={{ ...PDFSaleDetailstyles.tableCol, width: "37.5%" }}
                  >
                    <Text style={PDFSaleDetailstyles.tableCell}>
                      {item.name} {item.brand ? `(${item.brand})` : ''}: {item.description}
                    </Text>
                  </View>
                  <View
                    style={{ ...PDFSaleDetailstyles.tableCol, width: "12.5%" }}
                  >
                    <Text style={PDFSaleDetailstyles.tableCell}>
                      {item.unit_price}
                    </Text>
                  </View>
                  <View
                    style={{ ...PDFSaleDetailstyles.tableCol, width: "12.5%" }}
                  >
                    <Text style={PDFSaleDetailstyles.tableCell}>
                      {item.total_item_amount}
                    </Text>
                  </View>
                </View>
                 ))}
          </View>
          

          <View style={PDFSaleDetailstyles.totalSection}>
            <Text style={PDFSaleDetailstyles.totalText}>
              Total: {sale.total}
            </Text>
          </View>

          <Text style={PDFSaleDetailstyles.footer}>Gracias por su compra</Text>
        </Page>
        )
      })}
      </Document>
    </PDFViewer>

    /*
    <div className="flex justify-center items-center">
    <Button onClick={handleGoBack} className="border-2 border-blue-500 rounded p-2 m-2 h-[100px] hover:bg-blue-700 hover:h-[300px] transition-all duration-300">
      <ArrowLeftToLineIcon className="h-18 w-18 text-white/80"/>
    </Button>
    <PDFViewer style={{ width: '100vw', height: '85vh' }}>
      <Document title="Detalle_Ventas" author="Consigue_Ventas">
        {sales.map((sale: Sale, index: number) => {
          const products = productData?.filter((product: SaleDetailProduct) => product.sale_obj.saleID === sale.saleID);
          const services = serviceData?.filter((service: SaleDetailService) => service.sale.saleID == sale.saleID);
          return (
            <Page key={index} size="A4" style={styles.page}>
              <Watermark/>
              <View style={{width:'100%'}}>
              <Image src="/public/crm-logo-noBackground.png" style={watermarkStyle.watermarkImage} />
              <Text style={styles.header}>INFORME DE VENTA</Text>
                <View style={styles.container}>
                  
                  <Text style={styles.content}>{`Venta número ${sale.saleID}`}</Text>
                  <Text style={styles.content}>{`Fecha: ${sale.date}`}</Text>
                  <Text style={styles.content}>{`Cliente: ${sale.customer.name} ${sale.customer.lastname}`}</Text>
                  <Text style={styles.content}>{`Total: ${sale.total}`}</Text>
                  <Text style={styles.content}>{`Tipo de pago: ${getPaymentType(sale.paymentType)}`}</Text>
                </View>
                <View>
                  <Text style={styles.headerLeft}>Detalle de Venta:</Text>
                    <View style={styles.container}>
                      /*
                    {products.length > 0 && (
                      <>
                      <Text style={styles.headerLeft}>Productos:</Text>
                      <View style={[styles.horizontalContainer, styles.container]}> 
                      {products.map((product: SaleDetailProduct, productIndex: number) => (
                        <View key={productIndex} style={styles.productContainer}>  
                        <Text style={styles.content}>{`Producto: ${product.product.name}`}</Text>
                          <Text style={styles.content}>{`Cantidad: ${product.quantity}`}</Text>
                          <Text style={styles.content}>{`Precio Unitario: S/ ${product.unit_price}`}</Text>
                          <Text style={styles.content}>{`Descuento: S/ ${product.discount}`}</Text>
                          <Text style={styles.content}>{`Tax: S/ ${product.tax}`}</Text>
                          <Text style={styles.content}>{`Importe Total: S/ ${product.total_item_amount}`}</Text>
                        </View>
                      ))}
                      </View>
                      </>
                    )}

                      {services.length > 0 && (
                        <>
                      <Text style={styles.headerLeft}>Servicios:</Text>
                      <View style={[styles.horizontalContainer, styles.container]}> 
                      {services.map((service: SaleDetailService, serviceIndex: number) => (
                        <View key={serviceIndex} style={styles.productContainer}>
                          <Text style={styles.content}>{`Servicio: ${service.service.name}`}</Text>
                          <Text style={styles.content}>{`Cantidad: ${service.quantity}`}</Text>
                          <Text style={styles.content}>{`Precio Unitario: S/ ${service.unit_price}`}</Text>
                          <Text style={styles.content}>{`Descuento: S/ ${service.discount}`}</Text>
                          <Text style={styles.content}>{`Tax: S/ ${service.tax}`}</Text>
                          <Text style={styles.content}>{`Importe Total: S/ ${service.total_item_amount}`}</Text>
                        </View> 
                      ))}
                      </View>
                      </>
                      )}
                    </View>
                  </View>
                </View>
            </Page>
          );
        })}
      </Document>
    </PDFViewer>
  </div>
  */
  );
};

const getPaymentType = (paymentType: number): string => {
  switch (paymentType) {
    case 0:
      return "Tarjeta de Crédito";
    case 1:
      return "Tarjeta de Débito";
    case 2:
      return "Efectivo";
    case 3:
      return "Trasferencia Bancaria";
    case 4:
      return "Otro";
    default:
      return "Desconocido";
  }
};

export default PDFPreview;
