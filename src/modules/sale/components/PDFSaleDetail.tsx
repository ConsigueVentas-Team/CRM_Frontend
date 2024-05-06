import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
/*import { sales } from "../components/management/data";*/
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useParams } from 'react-router-dom';
import { useTitle } from "@/hooks/useTitle";
import { useFetchSaleDetail } from "../hooks/useFetchSaleDetail";
import React from 'react';

interface SaleDetailParams extends Record<string, string | undefined> {
    saleID: string;
}

const styles = StyleSheet.create({
    card: {
      borderRadius: 8,
      borderWidth: 1,
      backgroundColor: '#F3F4F6', // El color 'bg-card' de Tailwind CSS
      color: '#1F2937', // El color 'text-card-foreground' de Tailwind CSS
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // El estilo 'shadow-sm' de Tailwind CSS
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6, // El valor 'space-y-1.5' de Tailwind CSS
        padding: 24, // El valor 'p-6' de Tailwind CSS
    },
    cardTitle: {
        fontSize: 24, // El valor 'text-2xl' de Tailwind CSS
        fontWeight: 'medium', // El valor 'font-semibold' de Tailwind CSS
        lineHeight: 1, // El valor 'leading-none' de Tailwind CSS
         // El valor 'tracking-tight' de Tailwind CSS
    },
    cardDescription: {
        fontSize: 14, // El valor 'text-sm' de Tailwind CSS
        color: '#6B7280', // El valor 'text-muted-foreground' de Tailwind CSS
    },
    cardContent: {
        padding: 24, // El valor 'p-6' de Tailwind CSS
        paddingTop: 0, // El valor 'pt-0' de Tailwind CSS
      },
    texto: {
        fontSize: 14, // El valor 'text-sm' de Tailwind CSS
        color: '#6B7280',
        marginTop: 5 // El valor 'text-muted-foreground' de Tailwind CSS
      }, 
    textoTitulo: {
        fontSize: 14, // El valor 'text-sm' de Tailwind CSS
        fontWeight: 'normal', // El valor 'font-medium' de Tailwind CSS
        lineHeight: 1, // El valor 'leading-none' de Tailwind CSS
      },  
    container: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: "space-evenly",
        borderRadius: 4,
        borderWidth: 1,
        padding: 16, // Equivalente al valor 'p-4' de Tailwind CSS
        marginBottom: 10
      },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 4, // Equivalente al valor 'space-y-1' de Tailwind CSS
      },
    imageContainer: {
        width: 120, // Equivalente al valor 'w-32' de Tailwind CSS
        height: 120, // Equivalente al valor 'h-32' de Tailwind CSS
        backgroundColor: '#D1D5DB', // Equivalente al color 'bg-gray-600' de Tailwind CSS
      },
  });

const PDFSaleDetail = () => {

    const { saleID } = useParams<SaleDetailParams>();
    useTitle(`Venta #${saleID}`);
    const sales = useFetchSaleDetail(saleID ?? "");

    if (!sales) {
        return <div>Loading...</div>;
    }


 return (
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <Document>
                <Page >
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardTitle}>Detalle de Venta</Text>
                            <Text style={styles.cardDescription}>Resumen de la venta</Text>
                        </View>
                        <View style={styles.cardContent}>
                            {sales.map((sale, index) => (
                                <React.Fragment key={index}>
                                    {sale.serviceData && (
                                        <View style={styles.container}>
                                            <View style={styles.imageContainer}> 
                                            <Image src={""}></Image>
                                            </View>
                                                <div className="flex-1 space-y-1">
                                                    <Text style={styles.textoTitulo}>Lorem deserunt mollit enim reprehenderit dolor esse.</Text>
                                                    <Text style={styles.texto}>Cantidad: {sale.serviceData.quantity}</Text>
                                                    <Text style={styles.texto}>Descuento: {sale.serviceData.discount}</Text>
                                                    <Text style={styles.texto}>Total: {sale.serviceData.total_item_amount}</Text>
                                                    <Text style={styles.texto}>Fecha: {sale.serviceData.created_at}</Text>
                                                </div>
                                        </View>
                                    )}
                                     {sale.productData && (
                                        <View style={styles.container}>
                                            <View style={styles.imageContainer}>
                                            <Image src={sale.productData.product.image}></Image>
                                            </View>
                                                <View style={styles.textContainer}>
                                                    <Text style={styles.textoTitulo}>Productos</Text>
                                                    <Text style={styles.textoTitulo}>{sale.productData.product.name} {sale.productData.product.brand} {sale.productData.product.description}</Text>
                                                    <Text style={styles.texto}>Cantidad: {sale.productData.quantity}</Text>
                                                    <Text style={styles.texto}>Descuento: {sale.productData.discount}</Text>
                                                    <Text style={styles.texto}>Total: {sale.productData.total_item_amount}</Text>
                                                    <Text style={styles.texto}>Fecha: {sale.productData.created_at}</Text>
                                                </View>
                                        </View>
                                    )}
                                </React.Fragment>
                            ))}
                        </View>
                     </View>
                </Page>
            </Document>
        </PDFViewer>

 );   
};

export default PDFSaleDetail;