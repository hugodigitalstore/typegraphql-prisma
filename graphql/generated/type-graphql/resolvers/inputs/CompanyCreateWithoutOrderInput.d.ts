import { CustomerCreateNestedManyWithoutCompanyInput } from "../inputs/CustomerCreateNestedManyWithoutCompanyInput";
import { ProductCreateNestedManyWithoutCompanyInput } from "../inputs/ProductCreateNestedManyWithoutCompanyInput";
export declare class CompanyCreateWithoutOrderInput {
    name: string;
    adress?: string | undefined;
    customers?: CustomerCreateNestedManyWithoutCompanyInput | undefined;
    Product?: ProductCreateNestedManyWithoutCompanyInput | undefined;
}
