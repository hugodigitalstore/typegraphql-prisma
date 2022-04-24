import { CompanyCreateNestedOneWithoutOrderInput } from "../inputs/CompanyCreateNestedOneWithoutOrderInput";
import { CustomerCreateNestedOneWithoutOrdersInput } from "../inputs/CustomerCreateNestedOneWithoutOrdersInput";
export declare class OrderCreateWithoutOrderDetailInput {
    amount: number;
    customer: CustomerCreateNestedOneWithoutOrdersInput;
    company: CompanyCreateNestedOneWithoutOrderInput;
}
