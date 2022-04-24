import { OrderDetailCreateInput } from "../../../inputs/OrderDetailCreateInput";
import { OrderDetailUpdateInput } from "../../../inputs/OrderDetailUpdateInput";
import { OrderDetailWhereUniqueInput } from "../../../inputs/OrderDetailWhereUniqueInput";
export declare class UpsertOrderDetailArgs {
    where: OrderDetailWhereUniqueInput;
    create: OrderDetailCreateInput;
    update: OrderDetailUpdateInput;
}
