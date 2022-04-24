import { OrderDetailCreateNestedManyWithoutProductInput } from "../inputs/OrderDetailCreateNestedManyWithoutProductInput";
export declare class ProductCreateWithoutCompanyInput {
    name: string;
    price: number;
    OrderDetail?: OrderDetailCreateNestedManyWithoutProductInput | undefined;
}
