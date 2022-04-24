import { CompanyRelationFilter } from "../inputs/CompanyRelationFilter";
import { CustomerRelationFilter } from "../inputs/CustomerRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrderDetailListRelationFilter } from "../inputs/OrderDetailListRelationFilter";
export declare class OrderWhereInput {
    AND?: OrderWhereInput[] | undefined;
    OR?: OrderWhereInput[] | undefined;
    NOT?: OrderWhereInput[] | undefined;
    id?: IntFilter | undefined;
    amount?: IntFilter | undefined;
    customerId?: IntFilter | undefined;
    customer?: CustomerRelationFilter | undefined;
    companyId?: IntFilter | undefined;
    company?: CompanyRelationFilter | undefined;
    OrderDetail?: OrderDetailListRelationFilter | undefined;
}
