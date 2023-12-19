import { PDF } from "../pages/PDF"
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

export const PreviewPDF = ({ dataDetail }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <PDF dataDetail={dataDetail} />
        </QueryClientProvider>
    )
}
