import { CustomerListRelationFilter } from "../inputs/CustomerListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CompanyWhereInput {
    AND?: CompanyWhereInput[] | undefined;
    OR?: CompanyWhereInput[] | undefined;
    NOT?: CompanyWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    adress?: StringNullableFilter | undefined;
    customers?: CustomerListRelationFilter | undefined;
    Order?: OrderListRelationFilter | undefined;
    Product?: ProductListRelationFilter | undefined;
}
