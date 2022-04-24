import { CustomerCreateOrConnectWithoutOrdersInput } from "../inputs/CustomerCreateOrConnectWithoutOrdersInput";
import { CustomerCreateWithoutOrdersInput } from "../inputs/CustomerCreateWithoutOrdersInput";
import { CustomerUpdateWithoutOrdersInput } from "../inputs/CustomerUpdateWithoutOrdersInput";
import { CustomerUpsertWithoutOrdersInput } from "../inputs/CustomerUpsertWithoutOrdersInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerUpdateOneRequiredWithoutOrdersInput {
    create?: CustomerCreateWithoutOrdersInput | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput | undefined;
    upsert?: CustomerUpsertWithoutOrdersInput | undefined;
    connect?: CustomerWhereUniqueInput | undefined;
    update?: CustomerUpdateWithoutOrdersInput | undefined;
}
