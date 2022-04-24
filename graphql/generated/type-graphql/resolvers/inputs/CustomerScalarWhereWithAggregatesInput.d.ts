import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CustomerScalarWhereWithAggregatesInput {
    AND?: CustomerScalarWhereWithAggregatesInput[] | undefined;
    OR?: CustomerScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CustomerScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    customerId?: IntWithAggregatesFilter | undefined;
    companyId?: IntNullableWithAggregatesFilter | undefined;
}
