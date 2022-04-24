import { OrderCreateNestedOneWithoutOrderDetailInput } from "../inputs/OrderCreateNestedOneWithoutOrderDetailInput";
import { ProductCreateNestedOneWithoutOrderDetailInput } from "../inputs/ProductCreateNestedOneWithoutOrderDetailInput";
export declare class OrderDetailCreateInput {
    order: OrderCreateNestedOneWithoutOrderDetailInput;
    product: ProductCreateNestedOneWithoutOrderDetailInput;
    quantity: number;
}
