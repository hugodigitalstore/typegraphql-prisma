import { ProductCreateOrConnectWithoutOrderDetailInput } from "../inputs/ProductCreateOrConnectWithoutOrderDetailInput";
import { ProductCreateWithoutOrderDetailInput } from "../inputs/ProductCreateWithoutOrderDetailInput";
import { ProductUpdateWithoutOrderDetailInput } from "../inputs/ProductUpdateWithoutOrderDetailInput";
import { ProductUpsertWithoutOrderDetailInput } from "../inputs/ProductUpsertWithoutOrderDetailInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateOneRequiredWithoutOrderDetailInput {
    create?: ProductCreateWithoutOrderDetailInput | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutOrderDetailInput | undefined;
    upsert?: ProductUpsertWithoutOrderDetailInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
    update?: ProductUpdateWithoutOrderDetailInput | undefined;
}
