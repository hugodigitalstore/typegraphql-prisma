import { OrderDetailCreateManyProductInputEnvelope } from "../inputs/OrderDetailCreateManyProductInputEnvelope";
import { OrderDetailCreateOrConnectWithoutProductInput } from "../inputs/OrderDetailCreateOrConnectWithoutProductInput";
import { OrderDetailCreateWithoutProductInput } from "../inputs/OrderDetailCreateWithoutProductInput";
import { OrderDetailScalarWhereInput } from "../inputs/OrderDetailScalarWhereInput";
import { OrderDetailUpdateManyWithWhereWithoutProductInput } from "../inputs/OrderDetailUpdateManyWithWhereWithoutProductInput";
import { OrderDetailUpdateWithWhereUniqueWithoutProductInput } from "../inputs/OrderDetailUpdateWithWhereUniqueWithoutProductInput";
import { OrderDetailUpsertWithWhereUniqueWithoutProductInput } from "../inputs/OrderDetailUpsertWithWhereUniqueWithoutProductInput";
import { OrderDetailWhereUniqueInput } from "../inputs/OrderDetailWhereUniqueInput";
export declare class OrderDetailUpdateManyWithoutProductInput {
    create?: OrderDetailCreateWithoutProductInput[] | undefined;
    connectOrCreate?: OrderDetailCreateOrConnectWithoutProductInput[] | undefined;
    upsert?: OrderDetailUpsertWithWhereUniqueWithoutProductInput[] | undefined;
    createMany?: OrderDetailCreateManyProductInputEnvelope | undefined;
    set?: OrderDetailWhereUniqueInput[] | undefined;
    disconnect?: OrderDetailWhereUniqueInput[] | undefined;
    delete?: OrderDetailWhereUniqueInput[] | undefined;
    connect?: OrderDetailWhereUniqueInput[] | undefined;
    update?: OrderDetailUpdateWithWhereUniqueWithoutProductInput[] | undefined;
    updateMany?: OrderDetailUpdateManyWithWhereWithoutProductInput[] | undefined;
    deleteMany?: OrderDetailScalarWhereInput[] | undefined;
}
