import { Company } from "../../../models/Company";
import { Customer } from "../../../models/Customer";
import { Order } from "../../../models/Order";
import { CustomerOrdersArgs } from "./args/CustomerOrdersArgs";
export declare class CustomerRelationsResolver {
    orders(customer: Customer, ctx: any, args: CustomerOrdersArgs): Promise<Order[]>;
    Company(customer: Customer, ctx: any): Promise<Company | null>;
}
