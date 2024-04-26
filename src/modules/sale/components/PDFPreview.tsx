import React from "react";
import { PDFViewer, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { sales } from "../components/management/data";
import { Sale } from "@/types/sale";
import { Button } from "@/components/ui/button";


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
    fontSize: 22,
    paddingBottom: 5,
    textAlign: 'center',
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

  return (
    <div className="flex justify-center items-center ml-28">
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
    </div>
      );
    };
    

export default PDFPreview;