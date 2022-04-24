import { IntFilter } from "../inputs/IntFilter";
import { OrderRelationFilter } from "../inputs/OrderRelationFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
export declare class OrderDetailWhereInput {
    AND?: OrderDetailWhereInput[] | undefined;
    OR?: OrderDetailWhereInput[] | undefined;
    NOT?: OrderDetailWhereInput[] | undefined;
    id?: IntFilter | undefined;
    orderId?: IntFilter | undefined;
    order?: OrderRelationFilter | undefined;
    product?: ProductRelationFilter | undefined;
    productId?: IntFilter | undefined;
    quantity?: IntFilter | undefined;
}
