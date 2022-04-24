import { OrderDetailAvgOrderByAggregateInput } from "../inputs/OrderDetailAvgOrderByAggregateInput";
import { OrderDetailCountOrderByAggregateInput } from "../inputs/OrderDetailCountOrderByAggregateInput";
import { OrderDetailMaxOrderByAggregateInput } from "../inputs/OrderDetailMaxOrderByAggregateInput";
import { OrderDetailMinOrderByAggregateInput } from "../inputs/OrderDetailMinOrderByAggregateInput";
import { OrderDetailSumOrderByAggregateInput } from "../inputs/OrderDetailSumOrderByAggregateInput";
export declare class OrderDetailOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    orderId?: "asc" | "desc" | undefined;
    productId?: "asc" | "desc" | undefined;
    quantity?: "asc" | "desc" | undefined;
    _count?: OrderDetailCountOrderByAggregateInput | undefined;
    _avg?: OrderDetailAvgOrderByAggregateInput | undefined;
    _max?: OrderDetailMaxOrderByAggregateInput | undefined;
    _min?: OrderDetailMinOrderByAggregateInput | undefined;
    _sum?: OrderDetailSumOrderByAggregateInput | undefined;
}
