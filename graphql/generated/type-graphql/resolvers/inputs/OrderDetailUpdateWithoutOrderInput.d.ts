import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ProductUpdateOneRequiredWithoutOrderDetailInput } from "../inputs/ProductUpdateOneRequiredWithoutOrderDetailInput";
export declare class OrderDetailUpdateWithoutOrderInput {
    product?: ProductUpdateOneRequiredWithoutOrderDetailInput | undefined;
    quantity?: IntFieldUpdateOperationsInput | undefined;
}
