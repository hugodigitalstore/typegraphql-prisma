import { CustomerCreateNestedManyWithoutCompanyInput } from "../inputs/CustomerCreateNestedManyWithoutCompanyInput";
import { OrderCreateNestedManyWithoutCompanyInput } from "../inputs/OrderCreateNestedManyWithoutCompanyInput";
import { ProductCreateNestedManyWithoutCompanyInput } from "../inputs/ProductCreateNestedManyWithoutCompanyInput";
export declare class CompanyCreateInput {
    name: string;
    adress?: string | undefined;
    customers?: CustomerCreateNestedManyWithoutCompanyInput | undefined;
    Order?: OrderCreateNestedManyWithoutCompanyInput | undefined;
    Product?: ProductCreateNestedManyWithoutCompanyInput | undefined;
}
