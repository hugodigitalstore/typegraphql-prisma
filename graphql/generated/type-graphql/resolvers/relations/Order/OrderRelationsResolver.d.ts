import { Company } from "../../../models/Company";
import { Customer } from "../../../models/Customer";
import { Order } from "../../../models/Order";
import { OrderDetail } from "../../../models/OrderDetail";
import { OrderOrderDetailArgs } from "./args/OrderOrderDetailArgs";
export declare class OrderRelationsResolver {
    customer(order: Order, ctx: any): Promise<Customer>;
    company(order: Order, ctx: any): Promise<Company>;
    OrderDetail(order: Order, ctx: any, args: OrderOrderDetailArgs): Promise<OrderDetail[]>;
}
