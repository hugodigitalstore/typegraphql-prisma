import { CustomerUpdateManyWithoutCompanyInput } from "../inputs/CustomerUpdateManyWithoutCompanyInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutCompanyInput } from "../inputs/OrderUpdateManyWithoutCompanyInput";
import { ProductUpdateManyWithoutCompanyInput } from "../inputs/ProductUpdateManyWithoutCompanyInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CompanyUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    adress?: NullableStringFieldUpdateOperationsInput | undefined;
    customers?: CustomerUpdateManyWithoutCompanyInput | undefined;
    Order?: OrderUpdateManyWithoutCompanyInput | undefined;
    Product?: ProductUpdateManyWithoutCompanyInput | undefined;
}
