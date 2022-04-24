import { CompanyCreateOrConnectWithoutCustomersInput } from "../inputs/CompanyCreateOrConnectWithoutCustomersInput";
import { CompanyCreateWithoutCustomersInput } from "../inputs/CompanyCreateWithoutCustomersInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";
export declare class CompanyCreateNestedOneWithoutCustomersInput {
    create?: CompanyCreateWithoutCustomersInput | undefined;
    connectOrCreate?: CompanyCreateOrConnectWithoutCustomersInput | undefined;
    connect?: CompanyWhereUniqueInput | undefined;
}
