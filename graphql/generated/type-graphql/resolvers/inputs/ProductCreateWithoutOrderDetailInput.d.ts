import { CompanyCreateNestedOneWithoutProductInput } from "../inputs/CompanyCreateNestedOneWithoutProductInput";
export declare class ProductCreateWithoutOrderDetailInput {
    name: string;
    price: number;
    company: CompanyCreateNestedOneWithoutProductInput;
}
