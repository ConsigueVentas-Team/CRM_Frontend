import { PDFViewer } from "@react-pdf/renderer"
import { PDF } from "./PDF"

export const ProformaDetailPdf = () => {
    return (
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
            <PDF />
        </PDFViewer>
    )
}
