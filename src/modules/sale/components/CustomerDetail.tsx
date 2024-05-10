import React from 'react';
import { ClientDetail } from '@/types/auth';
import { User, Mail, Phone, Home } from 'lucide-react';

interface CustomerDetailProps {
    customer: ClientDetail | null;
    isLoading: boolean;
}

const CustomerDetail: React.FC<CustomerDetailProps> = ({ customer, isLoading }) => {
    if (isLoading) {
        return <p>Cargando detalles del cliente...</p>;
    }

    if (!customer) {
        return <p>No se encontraron detalles del cliente.</p>;
    }

    return (
        <div className="space-y-1 mb-2 rounded-xl border p-4">
            <p className="font-bold text-lg">Datos del cliente</p>
            <p className="text-sm text-muted-foreground"><User className="inline-block mr-2 h-4" />{customer.name} {customer.lastname}</p>
            <p className="text-sm text-muted-foreground"><Mail className="inline-block mr-2 h-4" />{customer.email}</p>
            <p className="text-sm text-muted-foreground"><Phone className="inline-block mr-2 h-4" />{customer.phone}</p>
            <p className="text-sm text-muted-foreground"><Home className="inline-block mr-2 h-4"/>{customer.address}</p>
        </div>
    );
}

export default CustomerDetail;