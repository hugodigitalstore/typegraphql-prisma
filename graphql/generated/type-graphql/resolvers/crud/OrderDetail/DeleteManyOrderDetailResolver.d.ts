import { GraphQLResolveInfo } from "graphql";
import { DeleteManyOrderDetailArgs } from "./args/DeleteManyOrderDetailArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyOrderDetailResolver {
    deleteManyOrderDetail(ctx: any, info: GraphQLResolveInfo, args: DeleteManyOrderDetailArgs): Promise<AffectedRowsOutput>;
}
