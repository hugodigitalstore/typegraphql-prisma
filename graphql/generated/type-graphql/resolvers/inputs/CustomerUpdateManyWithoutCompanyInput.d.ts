import { CustomerCreateManyCompanyInputEnvelope } from "../inputs/CustomerCreateManyCompanyInputEnvelope";
import { CustomerCreateOrConnectWithoutCompanyInput } from "../inputs/CustomerCreateOrConnectWithoutCompanyInput";
import { CustomerCreateWithoutCompanyInput } from "../inputs/CustomerCreateWithoutCompanyInput";
import { CustomerScalarWhereInput } from "../inputs/CustomerScalarWhereInput";
import { CustomerUpdateManyWithWhereWithoutCompanyInput } from "../inputs/CustomerUpdateManyWithWhereWithoutCompanyInput";
import { CustomerUpdateWithWhereUniqueWithoutCompanyInput } from "../inputs/CustomerUpdateWithWhereUniqueWithoutCompanyInput";
import { CustomerUpsertWithWhereUniqueWithoutCompanyInput } from "../inputs/CustomerUpsertWithWhereUniqueWithoutCompanyInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerUpdateManyWithoutCompanyInput {
    create?: CustomerCreateWithoutCompanyInput[] | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutCompanyInput[] | undefined;
    upsert?: CustomerUpsertWithWhereUniqueWithoutCompanyInput[] | undefined;
    createMany?: CustomerCreateManyCompanyInputEnvelope | undefined;
    set?: CustomerWhereUniqueInput[] | undefined;
    disconnect?: CustomerWhereUniqueInput[] | undefined;
    delete?: CustomerWhereUniqueInput[] | undefined;
    connect?: CustomerWhereUniqueInput[] | undefined;
    update?: CustomerUpdateWithWhereUniqueWithoutCompanyInput[] | undefined;
    updateMany?: CustomerUpdateManyWithWhereWithoutCompanyInput[] | undefined;
    deleteMany?: CustomerScalarWhereInput[] | undefined;
}
