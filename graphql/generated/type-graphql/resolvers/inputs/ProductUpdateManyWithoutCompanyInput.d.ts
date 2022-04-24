import { ProductCreateManyCompanyInputEnvelope } from "../inputs/ProductCreateManyCompanyInputEnvelope";
import { ProductCreateOrConnectWithoutCompanyInput } from "../inputs/ProductCreateOrConnectWithoutCompanyInput";
import { ProductCreateWithoutCompanyInput } from "../inputs/ProductCreateWithoutCompanyInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutCompanyInput } from "../inputs/ProductUpdateManyWithWhereWithoutCompanyInput";
import { ProductUpdateWithWhereUniqueWithoutCompanyInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutCompanyInput";
import { ProductUpsertWithWhereUniqueWithoutCompanyInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutCompanyInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutCompanyInput {
    create?: ProductCreateWithoutCompanyInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutCompanyInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutCompanyInput[] | undefined;
    createMany?: ProductCreateManyCompanyInputEnvelope | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutCompanyInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutCompanyInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
