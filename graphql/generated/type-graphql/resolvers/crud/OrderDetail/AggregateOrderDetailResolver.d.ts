import { GraphQLResolveInfo } from "graphql";
import { AggregateOrderDetailArgs } from "./args/AggregateOrderDetailArgs";
import { AggregateOrderDetail } from "../../outputs/AggregateOrderDetail";
export declare class AggregateOrderDetailResolver {
    aggregateOrderDetail(ctx: any, info: GraphQLResolveInfo, args: AggregateOrderDetailArgs): Promise<AggregateOrderDetail>;
}
