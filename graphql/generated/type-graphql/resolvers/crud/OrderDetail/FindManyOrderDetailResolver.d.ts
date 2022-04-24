import { GraphQLResolveInfo } from "graphql";
import { FindManyOrderDetailArgs } from "./args/FindManyOrderDetailArgs";
import { OrderDetail } from "../../../models/OrderDetail";
export declare class FindManyOrderDetailResolver {
    orderDetails(ctx: any, info: GraphQLResolveInfo, args: FindManyOrderDetailArgs): Promise<OrderDetail[]>;
}
