import { CompanyUpdateOneWithoutCustomersInput } from "../inputs/CompanyUpdateOneWithoutCustomersInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CustomerUpdateWithoutOrdersInput {
    email?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    customerId?: IntFieldUpdateOperationsInput | undefined;
    Company?: CompanyUpdateOneWithoutCustomersInput | undefined;
}
