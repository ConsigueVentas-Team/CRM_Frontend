import { Text } from "@svgdotjs/svg.js";

export interface Bill{
    id:number;
    date_of_issue: string;
    serie: string;
    number: string;
    ruc: string;
    business_name: string;
    address: string;
    description: string;
    amount: string;
    money: string;
    status: string;
}