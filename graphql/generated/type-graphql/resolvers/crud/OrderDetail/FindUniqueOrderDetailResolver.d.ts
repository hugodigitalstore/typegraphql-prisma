import { GraphQLResolveInfo } from "graphql";
import { FindUniqueOrderDetailArgs } from "./args/FindUniqueOrderDetailArgs";
import { OrderDetail } from "../../../models/OrderDetail";
export declare class FindUniqueOrderDetailResolver {
    orderDetail(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOrderDetailArgs): Promise<OrderDetail | null>;
}
