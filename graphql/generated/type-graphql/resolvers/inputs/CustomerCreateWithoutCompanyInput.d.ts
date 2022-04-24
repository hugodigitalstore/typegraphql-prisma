import { OrderCreateNestedManyWithoutCustomerInput } from "../inputs/OrderCreateNestedManyWithoutCustomerInput";
export declare class CustomerCreateWithoutCompanyInput {
    email: string;
    name?: string | undefined;
    orders?: OrderCreateNestedManyWithoutCustomerInput | undefined;
    customerId: number;
}
