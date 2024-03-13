interface Sale {
    id: number;
    date: string;
    amount: number;
    items: SaleItem[];
}

interface SaleItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}