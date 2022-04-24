import { GraphQLResolveInfo } from "graphql";
import { UpdateOrderDetailArgs } from "./args/UpdateOrderDetailArgs";
import { OrderDetail } from "../../../models/OrderDetail";
export declare class UpdateOrderDetailResolver {
    updateOrderDetail(ctx: any, info: GraphQLResolveInfo, args: UpdateOrderDetailArgs): Promise<OrderDetail | null>;
}
