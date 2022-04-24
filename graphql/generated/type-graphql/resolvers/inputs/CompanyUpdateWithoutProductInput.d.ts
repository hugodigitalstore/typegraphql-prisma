import { CustomerUpdateManyWithoutCompanyInput } from "../inputs/CustomerUpdateManyWithoutCompanyInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutCompanyInput } from "../inputs/OrderUpdateManyWithoutCompanyInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CompanyUpdateWithoutProductInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    adress?: NullableStringFieldUpdateOperationsInput | undefined;
    customers?: CustomerUpdateManyWithoutCompanyInput | undefined;
    Order?: OrderUpdateManyWithoutCompanyInput | undefined;
}
