import { Customer } from "../models/Customer";
import { Order } from "../models/Order";
import { Product } from "../models/Product";
import { CompanyCount } from "../resolvers/outputs/CompanyCount";
export declare class Company {
    id: number;
    name: string;
    adress?: string | null;
    customers?: Customer[];
    Order?: Order[];
    Product?: Product[];
    _count?: CompanyCount | null;
}
