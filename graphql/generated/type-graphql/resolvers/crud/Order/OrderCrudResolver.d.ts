import { GraphQLResolveInfo } from "graphql";
import { AggregateOrderArgs } from "./args/AggregateOrderArgs";
import { CreateManyOrderArgs } from "./args/CreateManyOrderArgs";
import { CreateOrderArgs } from "./args/CreateOrderArgs";
import { DeleteManyOrderArgs } from "./args/DeleteManyOrderArgs";
import { DeleteOrderArgs } from "./args/DeleteOrderArgs";
import { FindFirstOrderArgs } from "./args/FindFirstOrderArgs";
import { FindManyOrderArgs } from "./args/FindManyOrderArgs";
import { FindUniqueOrderArgs } from "./args/FindUniqueOrderArgs";
import { GroupByOrderArgs } from "./args/GroupByOrderArgs";
import { UpdateManyOrderArgs } from "./args/UpdateManyOrderArgs";
import { UpdateOrderArgs } from "./args/UpdateOrderArgs";
import { UpsertOrderArgs } from "./args/UpsertOrderArgs";
import { Order } from "../../../models/Order";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateOrder } from "../../outputs/AggregateOrder";
import { OrderGroupBy } from "../../outputs/OrderGroupBy";
export declare class OrderCrudResolver {
    order(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOrderArgs): Promise<Order | null>;
    findFirstOrder(ctx: any, info: GraphQLResolveInfo, args: FindFirstOrderArgs): Promise<Order | null>;
    orders(ctx: any, info: GraphQLResolveInfo, args: FindManyOrderArgs): Promise<Order[]>;
    createOrder(ctx: any, info: GraphQLResolveInfo, args: CreateOrderArgs): Promise<Order>;
    createManyOrder(ctx: any, info: GraphQLResolveInfo, args: CreateManyOrderArgs): Promise<AffectedRowsOutput>;
    deleteOrder(ctx: any, info: GraphQLResolveInfo, args: DeleteOrderArgs): Promise<Order | null>;
    updateOrder(ctx: any, info: GraphQLResolveInfo, args: UpdateOrderArgs): Promise<Order | null>;
    deleteManyOrder(ctx: any, info: GraphQLResolveInfo, args: DeleteManyOrderArgs): Promise<AffectedRowsOutput>;
    updateManyOrder(ctx: any, info: GraphQLResolveInfo, args: UpdateManyOrderArgs): Promise<AffectedRowsOutput>;
    upsertOrder(ctx: any, info: GraphQLResolveInfo, args: UpsertOrderArgs): Promise<Order>;
    aggregateOrder(ctx: any, info: GraphQLResolveInfo, args: AggregateOrderArgs): Promise<AggregateOrder>;
    groupByOrder(ctx: any, info: GraphQLResolveInfo, args: GroupByOrderArgs): Promise<OrderGroupBy[]>;
}
