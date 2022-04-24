import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OrderDetailUpdateManyWithoutProductInput } from "../inputs/OrderDetailUpdateManyWithoutProductInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductUpdateWithoutCompanyInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    price?: IntFieldUpdateOperationsInput | undefined;
    OrderDetail?: OrderDetailUpdateManyWithoutProductInput | undefined;
}
