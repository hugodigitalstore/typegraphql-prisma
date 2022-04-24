import { CompanyCreateNestedOneWithoutCustomersInput } from "../inputs/CompanyCreateNestedOneWithoutCustomersInput";
import { OrderCreateNestedManyWithoutCustomerInput } from "../inputs/OrderCreateNestedManyWithoutCustomerInput";
export declare class CustomerCreateInput {
    email: string;
    name?: string | undefined;
    orders?: OrderCreateNestedManyWithoutCustomerInput | undefined;
    customerId: number;
    Company?: CompanyCreateNestedOneWithoutCustomersInput | undefined;
}
