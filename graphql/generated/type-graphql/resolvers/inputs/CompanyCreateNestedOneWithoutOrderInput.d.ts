import { CompanyCreateOrConnectWithoutOrderInput } from "../inputs/CompanyCreateOrConnectWithoutOrderInput";
import { CompanyCreateWithoutOrderInput } from "../inputs/CompanyCreateWithoutOrderInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";
export declare class CompanyCreateNestedOneWithoutOrderInput {
    create?: CompanyCreateWithoutOrderInput | undefined;
    connectOrCreate?: CompanyCreateOrConnectWithoutOrderInput | undefined;
    connect?: CompanyWhereUniqueInput | undefined;
}
