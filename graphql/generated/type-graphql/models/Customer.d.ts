import { Company } from "../models/Company";
import { Order } from "../models/Order";
import { CustomerCount } from "../resolvers/outputs/CustomerCount";
export declare class Customer {
    id: number;
    email: string;
    name?: string | null;
    orders?: Order[];
    customerId: number;
    Company?: Company | null;
    companyId?: number | null;
    _count?: CustomerCount | null;
}
