import { CustomerCreateNestedOneWithoutOrdersInput } from "../inputs/CustomerCreateNestedOneWithoutOrdersInput";
import { OrderDetailCreateNestedManyWithoutOrderInput } from "../inputs/OrderDetailCreateNestedManyWithoutOrderInput";
export declare class OrderCreateWithoutCompanyInput {
    amount: number;
    customer: CustomerCreateNestedOneWithoutOrdersInput;
    OrderDetail?: OrderDetailCreateNestedManyWithoutOrderInput | undefined;
}
