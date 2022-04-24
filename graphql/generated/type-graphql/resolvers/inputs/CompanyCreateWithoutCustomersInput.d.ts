import { OrderCreateNestedManyWithoutCompanyInput } from "../inputs/OrderCreateNestedManyWithoutCompanyInput";
import { ProductCreateNestedManyWithoutCompanyInput } from "../inputs/ProductCreateNestedManyWithoutCompanyInput";
export declare class CompanyCreateWithoutCustomersInput {
    name: string;
    adress?: string | undefined;
    Order?: OrderCreateNestedManyWithoutCompanyInput | undefined;
    Product?: ProductCreateNestedManyWithoutCompanyInput | undefined;
}
