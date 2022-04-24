import { CustomerUpdateOneRequiredWithoutOrdersInput } from "../inputs/CustomerUpdateOneRequiredWithoutOrdersInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OrderDetailUpdateManyWithoutOrderInput } from "../inputs/OrderDetailUpdateManyWithoutOrderInput";
export declare class OrderUpdateWithoutCompanyInput {
    amount?: IntFieldUpdateOperationsInput | undefined;
    customer?: CustomerUpdateOneRequiredWithoutOrdersInput | undefined;
    OrderDetail?: OrderDetailUpdateManyWithoutOrderInput | undefined;
}
