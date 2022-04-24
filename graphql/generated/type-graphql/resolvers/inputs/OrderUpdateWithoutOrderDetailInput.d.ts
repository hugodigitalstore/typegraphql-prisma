import { CompanyUpdateOneRequiredWithoutOrderInput } from "../inputs/CompanyUpdateOneRequiredWithoutOrderInput";
import { CustomerUpdateOneRequiredWithoutOrdersInput } from "../inputs/CustomerUpdateOneRequiredWithoutOrdersInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
export declare class OrderUpdateWithoutOrderDetailInput {
    amount?: IntFieldUpdateOperationsInput | undefined;
    customer?: CustomerUpdateOneRequiredWithoutOrdersInput | undefined;
    company?: CompanyUpdateOneRequiredWithoutOrderInput | undefined;
}
