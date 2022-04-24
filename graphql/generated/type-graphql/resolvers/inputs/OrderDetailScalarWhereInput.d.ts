import { IntFilter } from "../inputs/IntFilter";
export declare class OrderDetailScalarWhereInput {
    AND?: OrderDetailScalarWhereInput[] | undefined;
    OR?: OrderDetailScalarWhereInput[] | undefined;
    NOT?: OrderDetailScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    orderId?: IntFilter | undefined;
    productId?: IntFilter | undefined;
    quantity?: IntFilter | undefined;
}
