import { CompanyUpdateOneRequiredWithoutOrderInput } from "../inputs/CompanyUpdateOneRequiredWithoutOrderInput";
import { CustomerUpdateOneRequiredWithoutOrdersInput } from "../inputs/CustomerUpdateOneRequiredWithoutOrdersInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OrderDetailUpdateManyWithoutOrderInput } from "../inputs/OrderDetailUpdateManyWithoutOrderInput";
export declare class OrderUpdateInput {
    amount?: IntFieldUpdateOperationsInput | undefined;
    customer?: CustomerUpdateOneRequiredWithoutOrdersInput | undefined;
    company?: CompanyUpdateOneRequiredWithoutOrderInput | undefined;
    OrderDetail?: OrderDetailUpdateManyWithoutOrderInput | undefined;
}
