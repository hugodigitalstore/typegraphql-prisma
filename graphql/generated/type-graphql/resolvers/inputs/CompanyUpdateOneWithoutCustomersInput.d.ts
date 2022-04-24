import { CompanyCreateOrConnectWithoutCustomersInput } from "../inputs/CompanyCreateOrConnectWithoutCustomersInput";
import { CompanyCreateWithoutCustomersInput } from "../inputs/CompanyCreateWithoutCustomersInput";
import { CompanyUpdateWithoutCustomersInput } from "../inputs/CompanyUpdateWithoutCustomersInput";
import { CompanyUpsertWithoutCustomersInput } from "../inputs/CompanyUpsertWithoutCustomersInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";
export declare class CompanyUpdateOneWithoutCustomersInput {
    create?: CompanyCreateWithoutCustomersInput | undefined;
    connectOrCreate?: CompanyCreateOrConnectWithoutCustomersInput | undefined;
    upsert?: CompanyUpsertWithoutCustomersInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: CompanyWhereUniqueInput | undefined;
    update?: CompanyUpdateWithoutCustomersInput | undefined;
}
