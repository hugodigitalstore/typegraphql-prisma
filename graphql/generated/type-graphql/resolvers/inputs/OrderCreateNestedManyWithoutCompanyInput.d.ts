import { OrderCreateManyCompanyInputEnvelope } from "../inputs/OrderCreateManyCompanyInputEnvelope";
import { OrderCreateOrConnectWithoutCompanyInput } from "../inputs/OrderCreateOrConnectWithoutCompanyInput";
import { OrderCreateWithoutCompanyInput } from "../inputs/OrderCreateWithoutCompanyInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedManyWithoutCompanyInput {
    create?: OrderCreateWithoutCompanyInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutCompanyInput[] | undefined;
    createMany?: OrderCreateManyCompanyInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
}
