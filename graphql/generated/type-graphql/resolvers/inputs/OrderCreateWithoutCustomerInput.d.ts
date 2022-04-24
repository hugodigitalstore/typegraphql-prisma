import { CompanyCreateNestedOneWithoutOrderInput } from "../inputs/CompanyCreateNestedOneWithoutOrderInput";
import { OrderDetailCreateNestedManyWithoutOrderInput } from "../inputs/OrderDetailCreateNestedManyWithoutOrderInput";
export declare class OrderCreateWithoutCustomerInput {
    amount: number;
    company: CompanyCreateNestedOneWithoutOrderInput;
    OrderDetail?: OrderDetailCreateNestedManyWithoutOrderInput | undefined;
}
