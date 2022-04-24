import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OrderUpdateOneRequiredWithoutOrderDetailInput } from "../inputs/OrderUpdateOneRequiredWithoutOrderDetailInput";
import { ProductUpdateOneRequiredWithoutOrderDetailInput } from "../inputs/ProductUpdateOneRequiredWithoutOrderDetailInput";
export declare class OrderDetailUpdateInput {
    order?: OrderUpdateOneRequiredWithoutOrderDetailInput | undefined;
    product?: ProductUpdateOneRequiredWithoutOrderDetailInput | undefined;
    quantity?: IntFieldUpdateOperationsInput | undefined;
}
