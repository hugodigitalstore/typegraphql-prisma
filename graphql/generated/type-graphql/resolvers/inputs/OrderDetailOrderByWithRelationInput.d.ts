import { OrderOrderByWithRelationInput } from "../inputs/OrderOrderByWithRelationInput";
import { ProductOrderByWithRelationInput } from "../inputs/ProductOrderByWithRelationInput";
export declare class OrderDetailOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    orderId?: "asc" | "desc" | undefined;
    order?: OrderOrderByWithRelationInput | undefined;
    product?: ProductOrderByWithRelationInput | undefined;
    productId?: "asc" | "desc" | undefined;
    quantity?: "asc" | "desc" | undefined;
}
