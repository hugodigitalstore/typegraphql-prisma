import { CustomerOrderByWithAggregationInput } from "../../../inputs/CustomerOrderByWithAggregationInput";
import { CustomerScalarWhereWithAggregatesInput } from "../../../inputs/CustomerScalarWhereWithAggregatesInput";
import { CustomerWhereInput } from "../../../inputs/CustomerWhereInput";
export declare class GroupByCustomerArgs {
    where?: CustomerWhereInput | undefined;
    orderBy?: CustomerOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "email" | "name" | "customerId" | "companyId">;
    having?: CustomerScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
