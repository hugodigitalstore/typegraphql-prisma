import { ProductAvgOrderByAggregateInput } from "../inputs/ProductAvgOrderByAggregateInput";
import { ProductCountOrderByAggregateInput } from "../inputs/ProductCountOrderByAggregateInput";
import { ProductMaxOrderByAggregateInput } from "../inputs/ProductMaxOrderByAggregateInput";
import { ProductMinOrderByAggregateInput } from "../inputs/ProductMinOrderByAggregateInput";
import { ProductSumOrderByAggregateInput } from "../inputs/ProductSumOrderByAggregateInput";
export declare class ProductOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    price?: "asc" | "desc" | undefined;
    companyId?: "asc" | "desc" | undefined;
    _count?: ProductCountOrderByAggregateInput | undefined;
    _avg?: ProductAvgOrderByAggregateInput | undefined;
    _max?: ProductMaxOrderByAggregateInput | undefined;
    _min?: ProductMinOrderByAggregateInput | undefined;
    _sum?: ProductSumOrderByAggregateInput | undefined;
}
