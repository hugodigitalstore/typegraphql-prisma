import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutCompanyInput } from "../inputs/OrderUpdateManyWithoutCompanyInput";
import { ProductUpdateManyWithoutCompanyInput } from "../inputs/ProductUpdateManyWithoutCompanyInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CompanyUpdateWithoutCustomersInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    adress?: NullableStringFieldUpdateOperationsInput | undefined;
    Order?: OrderUpdateManyWithoutCompanyInput | undefined;
    Product?: ProductUpdateManyWithoutCompanyInput | undefined;
}
