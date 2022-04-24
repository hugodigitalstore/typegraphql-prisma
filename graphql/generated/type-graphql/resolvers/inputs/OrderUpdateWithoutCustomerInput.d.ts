import { CompanyUpdateOneRequiredWithoutOrderInput } from "../inputs/CompanyUpdateOneRequiredWithoutOrderInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OrderDetailUpdateManyWithoutOrderInput } from "../inputs/OrderDetailUpdateManyWithoutOrderInput";
export declare class OrderUpdateWithoutCustomerInput {
    amount?: IntFieldUpdateOperationsInput | undefined;
    company?: CompanyUpdateOneRequiredWithoutOrderInput | undefined;
    OrderDetail?: OrderDetailUpdateManyWithoutOrderInput | undefined;
}
