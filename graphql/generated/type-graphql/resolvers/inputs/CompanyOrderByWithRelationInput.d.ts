import { CustomerOrderByRelationAggregateInput } from "../inputs/CustomerOrderByRelationAggregateInput";
import { OrderOrderByRelationAggregateInput } from "../inputs/OrderOrderByRelationAggregateInput";
import { ProductOrderByRelationAggregateInput } from "../inputs/ProductOrderByRelationAggregateInput";
export declare class CompanyOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    adress?: "asc" | "desc" | undefined;
    customers?: CustomerOrderByRelationAggregateInput | undefined;
    Order?: OrderOrderByRelationAggregateInput | undefined;
    Product?: ProductOrderByRelationAggregateInput | undefined;
}
