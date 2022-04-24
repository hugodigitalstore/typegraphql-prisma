import { OrderDetailCreateManyOrderInputEnvelope } from "../inputs/OrderDetailCreateManyOrderInputEnvelope";
import { OrderDetailCreateOrConnectWithoutOrderInput } from "../inputs/OrderDetailCreateOrConnectWithoutOrderInput";
import { OrderDetailCreateWithoutOrderInput } from "../inputs/OrderDetailCreateWithoutOrderInput";
import { OrderDetailScalarWhereInput } from "../inputs/OrderDetailScalarWhereInput";
import { OrderDetailUpdateManyWithWhereWithoutOrderInput } from "../inputs/OrderDetailUpdateManyWithWhereWithoutOrderInput";
import { OrderDetailUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/OrderDetailUpdateWithWhereUniqueWithoutOrderInput";
import { OrderDetailUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/OrderDetailUpsertWithWhereUniqueWithoutOrderInput";
import { OrderDetailWhereUniqueInput } from "../inputs/OrderDetailWhereUniqueInput";
export declare class OrderDetailUpdateManyWithoutOrderInput {
    create?: OrderDetailCreateWithoutOrderInput[] | undefined;
    connectOrCreate?: OrderDetailCreateOrConnectWithoutOrderInput[] | undefined;
    upsert?: OrderDetailUpsertWithWhereUniqueWithoutOrderInput[] | undefined;
    createMany?: OrderDetailCreateManyOrderInputEnvelope | undefined;
    set?: OrderDetailWhereUniqueInput[] | undefined;
    disconnect?: OrderDetailWhereUniqueInput[] | undefined;
    delete?: OrderDetailWhereUniqueInput[] | undefined;
    connect?: OrderDetailWhereUniqueInput[] | undefined;
    update?: OrderDetailUpdateWithWhereUniqueWithoutOrderInput[] | undefined;
    updateMany?: OrderDetailUpdateManyWithWhereWithoutOrderInput[] | undefined;
    deleteMany?: OrderDetailScalarWhereInput[] | undefined;
}
