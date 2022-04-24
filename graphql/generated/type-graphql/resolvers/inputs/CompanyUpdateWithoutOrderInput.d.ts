import { CustomerUpdateManyWithoutCompanyInput } from "../inputs/CustomerUpdateManyWithoutCompanyInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutCompanyInput } from "../inputs/ProductUpdateManyWithoutCompanyInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CompanyUpdateWithoutOrderInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    adress?: NullableStringFieldUpdateOperationsInput | undefined;
    customers?: CustomerUpdateManyWithoutCompanyInput | undefined;
    Product?: ProductUpdateManyWithoutCompanyInput | undefined;
}
