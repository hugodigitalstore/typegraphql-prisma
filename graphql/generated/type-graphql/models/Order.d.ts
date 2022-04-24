import { Company } from "../models/Company";
import { Customer } from "../models/Customer";
import { OrderDetail } from "../models/OrderDetail";
import { OrderCount } from "../resolvers/outputs/OrderCount";
export declare class Order {
    id: number;
    amount: number;
    customerId: number;
    customer?: Customer;
    companyId: number;
    company?: Company;
    OrderDetail?: OrderDetail[];
    _count?: OrderCount | null;
}
