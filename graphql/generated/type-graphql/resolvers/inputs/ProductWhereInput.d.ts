import { CompanyRelationFilter } from "../inputs/CompanyRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrderDetailListRelationFilter } from "../inputs/OrderDetailListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ProductWhereInput {
    AND?: ProductWhereInput[] | undefined;
    OR?: ProductWhereInput[] | undefined;
    NOT?: ProductWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    price?: IntFilter | undefined;
    companyId?: IntFilter | undefined;
    company?: CompanyRelationFilter | undefined;
    OrderDetail?: OrderDetailListRelationFilter | undefined;
}
