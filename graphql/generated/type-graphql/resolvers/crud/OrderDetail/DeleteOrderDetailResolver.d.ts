import { GraphQLResolveInfo } from "graphql";
import { DeleteOrderDetailArgs } from "./args/DeleteOrderDetailArgs";
import { OrderDetail } from "../../../models/OrderDetail";
export declare class DeleteOrderDetailResolver {
    deleteOrderDetail(ctx: any, info: GraphQLResolveInfo, args: DeleteOrderDetailArgs): Promise<OrderDetail | null>;
}
