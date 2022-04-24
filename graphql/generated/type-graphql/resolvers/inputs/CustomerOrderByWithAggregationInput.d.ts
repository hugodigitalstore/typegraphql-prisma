import { CustomerAvgOrderByAggregateInput } from "../inputs/CustomerAvgOrderByAggregateInput";
import { CustomerCountOrderByAggregateInput } from "../inputs/CustomerCountOrderByAggregateInput";
import { CustomerMaxOrderByAggregateInput } from "../inputs/CustomerMaxOrderByAggregateInput";
import { CustomerMinOrderByAggregateInput } from "../inputs/CustomerMinOrderByAggregateInput";
import { CustomerSumOrderByAggregateInput } from "../inputs/CustomerSumOrderByAggregateInput";
export declare class CustomerOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    customerId?: "asc" | "desc" | undefined;
    companyId?: "asc" | "desc" | undefined;
    _count?: CustomerCountOrderByAggregateInput | undefined;
    _avg?: CustomerAvgOrderByAggregateInput | undefined;
    _max?: CustomerMaxOrderByAggregateInput | undefined;
    _min?: CustomerMinOrderByAggregateInput | undefined;
    _sum?: CustomerSumOrderByAggregateInput | undefined;
}
