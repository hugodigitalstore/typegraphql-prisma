import { GraphQLResolveInfo } from "graphql";
import { UpsertOrderDetailArgs } from "./args/UpsertOrderDetailArgs";
import { OrderDetail } from "../../../models/OrderDetail";
export declare class UpsertOrderDetailResolver {
    upsertOrderDetail(ctx: any, info: GraphQLResolveInfo, args: UpsertOrderDetailArgs): Promise<OrderDetail>;
}
