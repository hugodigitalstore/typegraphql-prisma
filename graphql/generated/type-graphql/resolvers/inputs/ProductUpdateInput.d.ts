import { CompanyUpdateOneRequiredWithoutProductInput } from "../inputs/CompanyUpdateOneRequiredWithoutProductInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OrderDetailUpdateManyWithoutProductInput } from "../inputs/OrderDetailUpdateManyWithoutProductInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    price?: IntFieldUpdateOperationsInput | undefined;
    company?: CompanyUpdateOneRequiredWithoutProductInput | undefined;
    OrderDetail?: OrderDetailUpdateManyWithoutProductInput | undefined;
}
