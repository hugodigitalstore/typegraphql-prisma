import { CompanyCreateNestedOneWithoutProductInput } from "../inputs/CompanyCreateNestedOneWithoutProductInput";
import { OrderDetailCreateNestedManyWithoutProductInput } from "../inputs/OrderDetailCreateNestedManyWithoutProductInput";
export declare class ProductCreateInput {
    name: string;
    price: number;
    company: CompanyCreateNestedOneWithoutProductInput;
    OrderDetail?: OrderDetailCreateNestedManyWithoutProductInput | undefined;
}
