import { GraphQLResolveInfo } from "graphql";
import { GroupByOrderDetailArgs } from "./args/GroupByOrderDetailArgs";
import { OrderDetailGroupBy } from "../../outputs/OrderDetailGroupBy";
export declare class GroupByOrderDetailResolver {
    groupByOrderDetail(ctx: any, info: GraphQLResolveInfo, args: GroupByOrderDetailArgs): Promise<OrderDetailGroupBy[]>;
}
