import { CompanyCreateOrConnectWithoutProductInput } from "../inputs/CompanyCreateOrConnectWithoutProductInput";
import { CompanyCreateWithoutProductInput } from "../inputs/CompanyCreateWithoutProductInput";
import { CompanyUpdateWithoutProductInput } from "../inputs/CompanyUpdateWithoutProductInput";
import { CompanyUpsertWithoutProductInput } from "../inputs/CompanyUpsertWithoutProductInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";
export declare class CompanyUpdateOneRequiredWithoutProductInput {
    create?: CompanyCreateWithoutProductInput | undefined;
    connectOrCreate?: CompanyCreateOrConnectWithoutProductInput | undefined;
    upsert?: CompanyUpsertWithoutProductInput | undefined;
    connect?: CompanyWhereUniqueInput | undefined;
    update?: CompanyUpdateWithoutProductInput | undefined;
}
