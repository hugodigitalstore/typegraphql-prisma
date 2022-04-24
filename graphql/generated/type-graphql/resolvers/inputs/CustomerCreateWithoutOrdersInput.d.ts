import { CompanyCreateNestedOneWithoutCustomersInput } from "../inputs/CompanyCreateNestedOneWithoutCustomersInput";
export declare class CustomerCreateWithoutOrdersInput {
    email: string;
    name?: string | undefined;
    customerId: number;
    Company?: CompanyCreateNestedOneWithoutCustomersInput | undefined;
}
