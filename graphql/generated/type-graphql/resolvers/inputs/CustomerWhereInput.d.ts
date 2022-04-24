import { CompanyRelationFilter } from "../inputs/CompanyRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CustomerWhereInput {
    AND?: CustomerWhereInput[] | undefined;
    OR?: CustomerWhereInput[] | undefined;
    NOT?: CustomerWhereInput[] | undefined;
    id?: IntFilter | undefined;
    email?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    orders?: OrderListRelationFilter | undefined;
    customerId?: IntFilter | undefined;
    Company?: CompanyRelationFilter | undefined;
    companyId?: IntNullableFilter | undefined;
}
