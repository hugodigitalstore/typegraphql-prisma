import { CompanyCreateNestedOneWithoutOrderInput } from "../inputs/CompanyCreateNestedOneWithoutOrderInput";
import { CustomerCreateNestedOneWithoutOrdersInput } from "../inputs/CustomerCreateNestedOneWithoutOrdersInput";
import { OrderDetailCreateNestedManyWithoutOrderInput } from "../inputs/OrderDetailCreateNestedManyWithoutOrderInput";
export declare class OrderCreateInput {
    amount: number;
    customer: CustomerCreateNestedOneWithoutOrdersInput;
    company: CompanyCreateNestedOneWithoutOrderInput;
    OrderDetail?: OrderDetailCreateNestedManyWithoutOrderInput | undefined;
}
