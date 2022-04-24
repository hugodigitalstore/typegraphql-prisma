import { OrderCreateOrConnectWithoutOrderDetailInput } from "../inputs/OrderCreateOrConnectWithoutOrderDetailInput";
import { OrderCreateWithoutOrderDetailInput } from "../inputs/OrderCreateWithoutOrderDetailInput";
import { OrderUpdateWithoutOrderDetailInput } from "../inputs/OrderUpdateWithoutOrderDetailInput";
import { OrderUpsertWithoutOrderDetailInput } from "../inputs/OrderUpsertWithoutOrderDetailInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateOneRequiredWithoutOrderDetailInput {
    create?: OrderCreateWithoutOrderDetailInput | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutOrderDetailInput | undefined;
    upsert?: OrderUpsertWithoutOrderDetailInput | undefined;
    connect?: OrderWhereUniqueInput | undefined;
    update?: OrderUpdateWithoutOrderDetailInput | undefined;
}
