import { CompanyAvgOrderByAggregateInput } from "../inputs/CompanyAvgOrderByAggregateInput";
import { CompanyCountOrderByAggregateInput } from "../inputs/CompanyCountOrderByAggregateInput";
import { CompanyMaxOrderByAggregateInput } from "../inputs/CompanyMaxOrderByAggregateInput";
import { CompanyMinOrderByAggregateInput } from "../inputs/CompanyMinOrderByAggregateInput";
import { CompanySumOrderByAggregateInput } from "../inputs/CompanySumOrderByAggregateInput";
export declare class CompanyOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    adress?: "asc" | "desc" | undefined;
    _count?: CompanyCountOrderByAggregateInput | undefined;
    _avg?: CompanyAvgOrderByAggregateInput | undefined;
    _max?: CompanyMaxOrderByAggregateInput | undefined;
    _min?: CompanyMinOrderByAggregateInput | undefined;
    _sum?: CompanySumOrderByAggregateInput | undefined;
}
