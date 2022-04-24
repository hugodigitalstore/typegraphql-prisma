import { GraphQLResolveInfo } from "graphql";
import { CreateOrderDetailArgs } from "./args/CreateOrderDetailArgs";
import { OrderDetail } from "../../../models/OrderDetail";
export declare class CreateOrderDetailResolver {
    createOrderDetail(ctx: any, info: GraphQLResolveInfo, args: CreateOrderDetailArgs): Promise<OrderDetail>;
}
