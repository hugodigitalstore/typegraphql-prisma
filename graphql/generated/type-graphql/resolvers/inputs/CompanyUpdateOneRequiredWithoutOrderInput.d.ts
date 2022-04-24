import { CompanyCreateOrConnectWithoutOrderInput } from "../inputs/CompanyCreateOrConnectWithoutOrderInput";
import { CompanyCreateWithoutOrderInput } from "../inputs/CompanyCreateWithoutOrderInput";
import { CompanyUpdateWithoutOrderInput } from "../inputs/CompanyUpdateWithoutOrderInput";
import { CompanyUpsertWithoutOrderInput } from "../inputs/CompanyUpsertWithoutOrderInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";
export declare class CompanyUpdateOneRequiredWithoutOrderInput {
    create?: CompanyCreateWithoutOrderInput | undefined;
    connectOrCreate?: CompanyCreateOrConnectWithoutOrderInput | undefined;
    upsert?: CompanyUpsertWithoutOrderInput | undefined;
    connect?: CompanyWhereUniqueInput | undefined;
    update?: CompanyUpdateWithoutOrderInput | undefined;
}
