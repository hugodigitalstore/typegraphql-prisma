import { Company } from "../../../models/Company";
import { OrderDetail } from "../../../models/OrderDetail";
import { Product } from "../../../models/Product";
import { ProductOrderDetailArgs } from "./args/ProductOrderDetailArgs";
export declare class ProductRelationsResolver {
    company(product: Product, ctx: any): Promise<Company>;
    OrderDetail(product: Product, ctx: any, args: ProductOrderDetailArgs): Promise<OrderDetail[]>;
}
