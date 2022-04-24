import { Order } from "../models/Order";
import { Product } from "../models/Product";
export declare class OrderDetail {
    id: number;
    orderId: number;
    order?: Order;
    product?: Product;
    productId: number;
    quantity: number;
}
