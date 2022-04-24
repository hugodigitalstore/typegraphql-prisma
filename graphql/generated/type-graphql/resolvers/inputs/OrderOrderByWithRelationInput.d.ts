import { CompanyOrderByWithRelationInput } from "../inputs/CompanyOrderByWithRelationInput";
import { CustomerOrderByWithRelationInput } from "../inputs/CustomerOrderByWithRelationInput";
import { OrderDetailOrderByRelationAggregateInput } from "../inputs/OrderDetailOrderByRelationAggregateInput";
export declare class OrderOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    amount?: "asc" | "desc" | undefined;
    customerId?: "asc" | "desc" | undefined;
    customer?: CustomerOrderByWithRelationInput | undefined;
    companyId?: "asc" | "desc" | undefined;
    company?: CompanyOrderByWithRelationInput | undefined;
    OrderDetail?: OrderDetailOrderByRelationAggregateInput | undefined;
}
