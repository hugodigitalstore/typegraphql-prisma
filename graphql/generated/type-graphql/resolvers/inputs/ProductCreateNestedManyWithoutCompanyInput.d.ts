import { ProductCreateManyCompanyInputEnvelope } from "../inputs/ProductCreateManyCompanyInputEnvelope";
import { ProductCreateOrConnectWithoutCompanyInput } from "../inputs/ProductCreateOrConnectWithoutCompanyInput";
import { ProductCreateWithoutCompanyInput } from "../inputs/ProductCreateWithoutCompanyInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedManyWithoutCompanyInput {
    create?: ProductCreateWithoutCompanyInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutCompanyInput[] | undefined;
    createMany?: ProductCreateManyCompanyInputEnvelope | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
