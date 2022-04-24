import { CustomerCreateNestedManyWithoutCompanyInput } from "../inputs/CustomerCreateNestedManyWithoutCompanyInput";
import { OrderCreateNestedManyWithoutCompanyInput } from "../inputs/OrderCreateNestedManyWithoutCompanyInput";
export declare class CompanyCreateWithoutProductInput {
    name: string;
    adress?: string | undefined;
    customers?: CustomerCreateNestedManyWithoutCompanyInput | undefined;
    Order?: OrderCreateNestedManyWithoutCompanyInput | undefined;
}
