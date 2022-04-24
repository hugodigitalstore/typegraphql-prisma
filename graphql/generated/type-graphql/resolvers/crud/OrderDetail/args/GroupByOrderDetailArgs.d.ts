import { OrderDetailOrderByWithAggregationInput } from "../../../inputs/OrderDetailOrderByWithAggregationInput";
import { OrderDetailScalarWhereWithAggregatesInput } from "../../../inputs/OrderDetailScalarWhereWithAggregatesInput";
import { OrderDetailWhereInput } from "../../../inputs/OrderDetailWhereInput";
export declare class GroupByOrderDetailArgs {
    where?: OrderDetailWhereInput | undefined;
    orderBy?: OrderDetailOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "orderId" | "productId" | "quantity">;
    having?: OrderDetailScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
