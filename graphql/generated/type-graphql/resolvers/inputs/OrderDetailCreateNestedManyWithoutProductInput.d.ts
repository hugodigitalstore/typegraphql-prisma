import { OrderDetailCreateManyProductInputEnvelope } from "../inputs/OrderDetailCreateManyProductInputEnvelope";
import { OrderDetailCreateOrConnectWithoutProductInput } from "../inputs/OrderDetailCreateOrConnectWithoutProductInput";
import { OrderDetailCreateWithoutProductInput } from "../inputs/OrderDetailCreateWithoutProductInput";
import { OrderDetailWhereUniqueInput } from "../inputs/OrderDetailWhereUniqueInput";
export declare class OrderDetailCreateNestedManyWithoutProductInput {
    create?: OrderDetailCreateWithoutProductInput[] | undefined;
    connectOrCreate?: OrderDetailCreateOrConnectWithoutProductInput[] | undefined;
    createMany?: OrderDetailCreateManyProductInputEnvelope | undefined;
    connect?: OrderDetailWhereUniqueInput[] | undefined;
}
