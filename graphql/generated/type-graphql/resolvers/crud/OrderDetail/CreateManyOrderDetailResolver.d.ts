import { GraphQLResolveInfo } from "graphql";
import { CreateManyOrderDetailArgs } from "./args/CreateManyOrderDetailArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyOrderDetailResolver {
    createManyOrderDetail(ctx: any, info: GraphQLResolveInfo, args: CreateManyOrderDetailArgs): Promise<AffectedRowsOutput>;
}
