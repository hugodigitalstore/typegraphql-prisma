import { OrderCreateOrConnectWithoutOrderDetailInput } from "../inputs/OrderCreateOrConnectWithoutOrderDetailInput";
import { OrderCreateWithoutOrderDetailInput } from "../inputs/OrderCreateWithoutOrderDetailInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedOneWithoutOrderDetailInput {
    create?: OrderCreateWithoutOrderDetailInput | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutOrderDetailInput | undefined;
    connect?: OrderWhereUniqueInput | undefined;
}
