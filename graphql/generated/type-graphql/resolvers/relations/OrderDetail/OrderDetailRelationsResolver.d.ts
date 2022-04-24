import { Order } from "../../../models/Order";
import { OrderDetail } from "../../../models/OrderDetail";
import { Product } from "../../../models/Product";
export declare class OrderDetailRelationsResolver {
    order(orderDetail: OrderDetail, ctx: any): Promise<Order>;
    product(orderDetail: OrderDetail, ctx: any): Promise<Product>;
}
