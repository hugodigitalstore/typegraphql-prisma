import { IntFilter } from "../inputs/IntFilter";
export declare class OrderScalarWhereInput {
    AND?: OrderScalarWhereInput[] | undefined;
    OR?: OrderScalarWhereInput[] | undefined;
    NOT?: OrderScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    amount?: IntFilter | undefined;
    customerId?: IntFilter | undefined;
    companyId?: IntFilter | undefined;
}
