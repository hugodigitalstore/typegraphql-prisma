import { OrderAvgOrderByAggregateInput } from "../inputs/OrderAvgOrderByAggregateInput";
import { OrderCountOrderByAggregateInput } from "../inputs/OrderCountOrderByAggregateInput";
import { OrderMaxOrderByAggregateInput } from "../inputs/OrderMaxOrderByAggregateInput";
import { OrderMinOrderByAggregateInput } from "../inputs/OrderMinOrderByAggregateInput";
import { OrderSumOrderByAggregateInput } from "../inputs/OrderSumOrderByAggregateInput";
export declare class OrderOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    amount?: "asc" | "desc" | undefined;
    customerId?: "asc" | "desc" | undefined;
    companyId?: "asc" | "desc" | undefined;
    _count?: OrderCountOrderByAggregateInput | undefined;
    _avg?: OrderAvgOrderByAggregateInput | undefined;
    _max?: OrderMaxOrderByAggregateInput | undefined;
    _min?: OrderMinOrderByAggregateInput | undefined;
    _sum?: OrderSumOrderByAggregateInput | undefined;
}
