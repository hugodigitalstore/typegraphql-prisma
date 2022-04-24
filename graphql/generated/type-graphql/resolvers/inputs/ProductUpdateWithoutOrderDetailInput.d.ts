import { CompanyUpdateOneRequiredWithoutProductInput } from "../inputs/CompanyUpdateOneRequiredWithoutProductInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductUpdateWithoutOrderDetailInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    price?: IntFieldUpdateOperationsInput | undefined;
    company?: CompanyUpdateOneRequiredWithoutProductInput | undefined;
}
