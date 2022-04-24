import { CompanyOrderByWithRelationInput } from "../inputs/CompanyOrderByWithRelationInput";
import { OrderDetailOrderByRelationAggregateInput } from "../inputs/OrderDetailOrderByRelationAggregateInput";
export declare class ProductOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    price?: "asc" | "desc" | undefined;
    companyId?: "asc" | "desc" | undefined;
    company?: CompanyOrderByWithRelationInput | undefined;
    OrderDetail?: OrderDetailOrderByRelationAggregateInput | undefined;
}
