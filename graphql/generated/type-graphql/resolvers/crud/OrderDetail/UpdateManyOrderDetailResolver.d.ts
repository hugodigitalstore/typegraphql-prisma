import { GraphQLResolveInfo } from "graphql";
import { UpdateManyOrderDetailArgs } from "./args/UpdateManyOrderDetailArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyOrderDetailResolver {
    updateManyOrderDetail(ctx: any, info: GraphQLResolveInfo, args: UpdateManyOrderDetailArgs): Promise<AffectedRowsOutput>;
}
