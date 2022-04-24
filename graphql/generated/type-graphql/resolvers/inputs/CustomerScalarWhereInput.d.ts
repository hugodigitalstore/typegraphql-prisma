import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CustomerScalarWhereInput {
    AND?: CustomerScalarWhereInput[] | undefined;
    OR?: CustomerScalarWhereInput[] | undefined;
    NOT?: CustomerScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    email?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    customerId?: IntFilter | undefined;
    companyId?: IntNullableFilter | undefined;
}
