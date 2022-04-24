import { OrderDetailCreateManyOrderInputEnvelope } from "../inputs/OrderDetailCreateManyOrderInputEnvelope";
import { OrderDetailCreateOrConnectWithoutOrderInput } from "../inputs/OrderDetailCreateOrConnectWithoutOrderInput";
import { OrderDetailCreateWithoutOrderInput } from "../inputs/OrderDetailCreateWithoutOrderInput";
import { OrderDetailWhereUniqueInput } from "../inputs/OrderDetailWhereUniqueInput";
export declare class OrderDetailCreateNestedManyWithoutOrderInput {
    create?: OrderDetailCreateWithoutOrderInput[] | undefined;
    connectOrCreate?: OrderDetailCreateOrConnectWithoutOrderInput[] | undefined;
    createMany?: OrderDetailCreateManyOrderInputEnvelope | undefined;
    connect?: OrderDetailWhereUniqueInput[] | undefined;
}
