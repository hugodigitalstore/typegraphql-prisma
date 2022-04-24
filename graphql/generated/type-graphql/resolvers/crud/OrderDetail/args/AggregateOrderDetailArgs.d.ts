import { OrderDetailOrderByWithRelationInput } from "../../../inputs/OrderDetailOrderByWithRelationInput";
import { OrderDetailWhereInput } from "../../../inputs/OrderDetailWhereInput";
import { OrderDetailWhereUniqueInput } from "../../../inputs/OrderDetailWhereUniqueInput";
export declare class AggregateOrderDetailArgs {
    where?: OrderDetailWhereInput | undefined;
    orderBy?: OrderDetailOrderByWithRelationInput[] | undefined;
    cursor?: OrderDetailWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
