import { GraphQLResolveInfo } from "graphql";
import { FindFirstOrderDetailArgs } from "./args/FindFirstOrderDetailArgs";
import { OrderDetail } from "../../../models/OrderDetail";
export declare class FindFirstOrderDetailResolver {
    findFirstOrderDetail(ctx: any, info: GraphQLResolveInfo, args: FindFirstOrderDetailArgs): Promise<OrderDetail | null>;
}
