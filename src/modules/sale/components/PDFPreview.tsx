import React, { useEffect, useState } from "react";
import { PDFViewer, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
/*import { sales } from "../components/management/data";*/
import { Sale, SaleDetailProduct, SaleDetailService } from "@/types/sale";
import { Button } from "@/components/ui/button";
import api from "@/services/api";
import { useQuery } from "react-query";
import { ArrowLeftToLineIcon } from "lucide-react";

interface SalesData {
  sales: Sale[];
  productDetails: SaleDetailProduct[];
  serviceDetails: SaleDetailService[];
}

/*Estilos para el PDF*/
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#F0F4F8',
    padding: 20, // Aumentar el padding
    justifyContent: 'center', // Centrar contenido horizontalmente
    alignItems: 'flex-start', // Alinear contenido arriba
  },
  container: {
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 20, // Aumentar el padding
    marginBottom: 20, // Aumentar el margen inferior
    width: '100%', // Usar el 90% del ancho de la página
  },
  header: {
    fontSize: 20,
    paddingBottom: 5,
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold',
    color: '#333',
  },
  headerLeft: {
    fontSize: 18,
    paddingBottom: 5,
    paddingTop: 15,
    textAlign: "left",
    fontFamily: 'Helvetica-Bold',
    color: '#333',
  },
  content: {
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'Helvetica',
    color: '#555',
  },
  bold: {
    fontWeight: "bold",
  },
  section: {
    marginVertical: 10, // Ajustar el espacio vertical
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  productContainer: {
    marginRight: 20, // Agregar margen derecho para separar los productos
  },
}); 



const PDFPreview = () => {

  const handleGoBack = () => {
    window.history.back(); // Vuelve a la página anterior
  };

  const [salesData, setSalesData] = useState<SalesData | null>(null); // Inicializar como null

/*Aquí hacemos las peticiones de las ventas, los productos y servicios*/
  useEffect(() => {
    const fetchData = async () => {
      try {
        const salesResponse = await api.get("/sales");
        const productDetailsResponse = await api.get("/saledetailproduct");
        const serviceDetailsResponse = await api.get("/saledetailservice");
        setSalesData({
          sales: salesResponse.data.results,
          productDetails: productDetailsResponse.data.results,
          serviceDetails: serviceDetailsResponse.data.results
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Solo se ejecuta una vez al montar el componente

  if (!salesData) {
    return <div>Loading...</div>;
  }

  const { sales, productDetails, serviceDetails } = salesData;
/*
  if (isLoadingSales || isLoadingProductDetails || isLoadingServiceDetails) {
    return <div>Loading...</div>;
  }
*/
  return (
    <div className="flex justify-center items-center">
    <Button onClick={handleGoBack} className="border-2 border-blue-500 rounded p-2 m-2 h-[100px] hover:bg-blue-700 hover:h-[300px] transition-all duration-300">
      <ArrowLeftToLineIcon className="h-18 w-18 text-white/80"/>
    </Button>
    <PDFViewer style={{ width: '100vw', height: '85vh' }}>
      <Document title="Detalle_Ventas" author="Consigue_Ventas">
        {sales.map((sale: Sale, index: number) => {
          const products = productDetails.filter((product: SaleDetailProduct) => product.sale_obj.saleID === sale.saleID);
          const services = serviceDetails.filter((service: SaleDetailService) => service.sale == sale.saleID);
          return (
            <Page key={index} size="A4" style={styles.page}>
              <View style={styles.container}>
                <View style={styles.container}>
                  <Text style={styles.header}>Reporte de Venta</Text>
                  <Text style={styles.content}>{`Venta Número ${sale.saleID}`}</Text>
                  <Text style={styles.content}>{`Fecha: ${sale.date}`}</Text>
                  <Text style={styles.content}>{`Total: ${sale.total}`}</Text>
                  <Text style={styles.content}>{`Tipo de pago: ${getPaymentType(sale.paymentType)}`}</Text>
                </View>
                <View>
                  <Text style={styles.headerLeft}>Detalle de Venta:</Text>
                  
                    <View style={styles.container}>
                      {/* Renderizar productos */}
                      <Text style={styles.headerLeft}>Productos:</Text>
                      <View style={[styles.horizontalContainer, styles.container]}> 
                      {products.map((product: SaleDetailProduct, productIndex: number) => (
                        <View key={productIndex} style={styles.productContainer}>  
                          <Text style={styles.content}>{`Producto: ${product.id}`}</Text>
                          <Text style={styles.content}>{`Cantidad: ${product.quantity}`}</Text>
                          <Text style={styles.content}>{`Precio Unitario: S/ ${product.unit_price}`}</Text>
                          <Text style={styles.content}>{`Descuento: S/ ${product.discount}`}</Text>
                          <Text style={styles.content}>{`Tax: S/ ${product.tax}`}</Text>
                          <Text style={styles.content}>{`Importe Total: S/ ${product.total_item_amount}`}</Text>
                        </View>
                      ))}
                      </View>

                      {/* Renderizar servicios */}
                      <Text style={styles.headerLeft}>Servicios:</Text>
                      <View style={[styles.horizontalContainer, styles.container]}> 
                      {services.map((service: SaleDetailService, serviceIndex: number) => (
                        <View key={serviceIndex} style={styles.productContainer}>
                          <Text style={styles.content}>{`Servicio: ${service.id}`}</Text>
                          <Text style={styles.content}>{`Cantidad: ${service.quantity}`}</Text>
                          <Text style={styles.content}>{`Precio Unitario: S/ ${service.unit_price}`}</Text>
                          <Text style={styles.content}>{`Descuento: S/ ${service.discount}`}</Text>
                          <Text style={styles.content}>{`Tax: S/ ${service.tax}`}</Text>
                          <Text style={styles.content}>{`Importe Total: S/ ${service.total_item_amount}`}</Text>
                        </View> 
                      ))}
                      </View>
                    </View>
                  </View>
                </View>
            </Page>
          );
        })}
      </Document>
    </PDFViewer>
  </div>


    /*<div className="flex justify-center items-center ml-28">
    <PDFViewer width="1200px" height="800px" >
      <Document title="Detalle_Ventas" author="Consigue_Ventas">
        {sales.map((sale: Sale, index: number) => (
          <Page key={index} size="A4" style={styles.page} >
            <View style={styles.container}>
              <View style={styles.container}>
                <Text style={styles.header}>Detalle de Ventas</Text>
              </View>
              <View style={styles.container}>
                <Text style={[styles.header, styles.section]}>
                  {sale.items[0]?.type === 'product' ? 'Detalle de Producto' : 'Detalle de Servicio'}
                </Text>
                <Text style={styles.content}>
                  Nombre del {sale.items[0]?.type === 'product' ? 'producto ' : 'servicio '}{sale.id}
                </Text>
                <Text style={styles.content}>Fecha de venta: {sale.sale_date}</Text>
                <Text style={styles.content}>Total: S/ {sale.total_amount}</Text> 
                <Text style={styles.content}>Cliente: Jhon Doe</Text>
                <Text style={styles.content}>Vendedor: Unknown</Text>
              </View>
              <View style={[styles.container, styles.horizontalContainer]}>
                {sale.items.map((item, itemIndex) => (
                  <View key={itemIndex} style={[styles.section, styles.productContainer]}>
                    <Text style={[styles.content, styles.bold]}>
                      {item.type === 'product' ? 'Producto' : 'Servicio'} {item.id}
                    </Text>
                    <Text style={styles.content}>Cantidad: {item.quantity}</Text>
                    <Text style={styles.content}>Precio unitario: S/ {item.unit_price}</Text>
                    <Text style={styles.content}>Descuento: S/ {item.discount}</Text>
                    <Text style={styles.content}>Impuesto: S/ {item.tax}</Text>
                    <Text style={styles.content}>Total: S/ {item.total_item_amount}</Text>
                  </View>
                ))}
              </View>
            </View>
          </Page>
        ))}
      </Document>
    </PDFViewer>
    <Button className="border-2 border-blue-500 rounded p-2 m-2">
        Volver atrás
    </Button>
    </div>*/
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
          return "Trasferencia Bancaria"
        case 4: 
          return "Otro"
        default:
          return "Desconocido";
      }
    };

export default PDFPreview;