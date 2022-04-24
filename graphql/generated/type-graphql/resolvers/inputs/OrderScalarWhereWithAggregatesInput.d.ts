import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
export declare class OrderScalarWhereWithAggregatesInput {
    AND?: OrderScalarWhereWithAggregatesInput[] | undefined;
    OR?: OrderScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OrderScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    amount?: IntWithAggregatesFilter | undefined;
    customerId?: IntWithAggregatesFilter | undefined;
    companyId?: IntWithAggregatesFilter | undefined;
}
