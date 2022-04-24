import { ProductCreateOrConnectWithoutOrderDetailInput } from "../inputs/ProductCreateOrConnectWithoutOrderDetailInput";
import { ProductCreateWithoutOrderDetailInput } from "../inputs/ProductCreateWithoutOrderDetailInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedOneWithoutOrderDetailInput {
    create?: ProductCreateWithoutOrderDetailInput | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutOrderDetailInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
}
