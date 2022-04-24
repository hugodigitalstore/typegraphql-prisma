import { CustomerCreateManyCompanyInputEnvelope } from "../inputs/CustomerCreateManyCompanyInputEnvelope";
import { CustomerCreateOrConnectWithoutCompanyInput } from "../inputs/CustomerCreateOrConnectWithoutCompanyInput";
import { CustomerCreateWithoutCompanyInput } from "../inputs/CustomerCreateWithoutCompanyInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerCreateNestedManyWithoutCompanyInput {
    create?: CustomerCreateWithoutCompanyInput[] | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutCompanyInput[] | undefined;
    createMany?: CustomerCreateManyCompanyInputEnvelope | undefined;
    connect?: CustomerWhereUniqueInput[] | undefined;
}
