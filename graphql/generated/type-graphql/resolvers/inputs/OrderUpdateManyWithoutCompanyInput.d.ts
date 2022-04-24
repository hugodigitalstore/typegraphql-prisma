import { OrderCreateManyCompanyInputEnvelope } from "../inputs/OrderCreateManyCompanyInputEnvelope";
import { OrderCreateOrConnectWithoutCompanyInput } from "../inputs/OrderCreateOrConnectWithoutCompanyInput";
import { OrderCreateWithoutCompanyInput } from "../inputs/OrderCreateWithoutCompanyInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutCompanyInput } from "../inputs/OrderUpdateManyWithWhereWithoutCompanyInput";
import { OrderUpdateWithWhereUniqueWithoutCompanyInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutCompanyInput";
import { OrderUpsertWithWhereUniqueWithoutCompanyInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutCompanyInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateManyWithoutCompanyInput {
    create?: OrderCreateWithoutCompanyInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutCompanyInput[] | undefined;
    upsert?: OrderUpsertWithWhereUniqueWithoutCompanyInput[] | undefined;
    createMany?: OrderCreateManyCompanyInputEnvelope | undefined;
    set?: OrderWhereUniqueInput[] | undefined;
    disconnect?: OrderWhereUniqueInput[] | undefined;
    delete?: OrderWhereUniqueInput[] | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
    update?: OrderUpdateWithWhereUniqueWithoutCompanyInput[] | undefined;
    updateMany?: OrderUpdateManyWithWhereWithoutCompanyInput[] | undefined;
    deleteMany?: OrderScalarWhereInput[] | undefined;
}
