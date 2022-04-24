import { CompanyCreateOrConnectWithoutProductInput } from "../inputs/CompanyCreateOrConnectWithoutProductInput";
import { CompanyCreateWithoutProductInput } from "../inputs/CompanyCreateWithoutProductInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";
export declare class CompanyCreateNestedOneWithoutProductInput {
    create?: CompanyCreateWithoutProductInput | undefined;
    connectOrCreate?: CompanyCreateOrConnectWithoutProductInput | undefined;
    connect?: CompanyWhereUniqueInput | undefined;
}
