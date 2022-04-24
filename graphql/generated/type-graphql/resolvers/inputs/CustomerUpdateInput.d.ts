import { CompanyUpdateOneWithoutCustomersInput } from "../inputs/CompanyUpdateOneWithoutCustomersInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutCustomerInput } from "../inputs/OrderUpdateManyWithoutCustomerInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CustomerUpdateInput {
    email?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    orders?: OrderUpdateManyWithoutCustomerInput | undefined;
    customerId?: IntFieldUpdateOperationsInput | undefined;
    Company?: CompanyUpdateOneWithoutCustomersInput | undefined;
}
