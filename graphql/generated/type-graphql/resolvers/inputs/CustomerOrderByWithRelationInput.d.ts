import { CompanyOrderByWithRelationInput } from "../inputs/CompanyOrderByWithRelationInput";
import { OrderOrderByRelationAggregateInput } from "../inputs/OrderOrderByRelationAggregateInput";
export declare class CustomerOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    orders?: OrderOrderByRelationAggregateInput | undefined;
    customerId?: "asc" | "desc" | undefined;
    Company?: CompanyOrderByWithRelationInput | undefined;
    companyId?: "asc" | "desc" | undefined;
}
