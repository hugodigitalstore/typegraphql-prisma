import { Company } from "../models/Company";
import { OrderDetail } from "../models/OrderDetail";
import { ProductCount } from "../resolvers/outputs/ProductCount";
export declare class Product {
    id: number;
    name: string;
    price: number;
    companyId: number;
    company?: Company;
    OrderDetail?: OrderDetail[];
    _count?: ProductCount | null;
}
