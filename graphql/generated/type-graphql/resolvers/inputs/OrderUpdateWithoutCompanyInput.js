"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerUpdateOneRequiredWithoutOrdersInput_1 = require("../inputs/CustomerUpdateOneRequiredWithoutOrdersInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const OrderDetailUpdateManyWithoutOrderInput_1 = require("../inputs/OrderDetailUpdateManyWithoutOrderInput");
let OrderUpdateWithoutCompanyInput = class OrderUpdateWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], OrderUpdateWithoutCompanyInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerUpdateOneRequiredWithoutOrdersInput_1.CustomerUpdateOneRequiredWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerUpdateOneRequiredWithoutOrdersInput_1.CustomerUpdateOneRequiredWithoutOrdersInput)
], OrderUpdateWithoutCompanyInput.prototype, "customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailUpdateManyWithoutOrderInput_1.OrderDetailUpdateManyWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailUpdateManyWithoutOrderInput_1.OrderDetailUpdateManyWithoutOrderInput)
], OrderUpdateWithoutCompanyInput.prototype, "OrderDetail", void 0);
OrderUpdateWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithoutCompanyInput", {
        isAbstract: true
    })
], OrderUpdateWithoutCompanyInput);
exports.OrderUpdateWithoutCompanyInput = OrderUpdateWithoutCompanyInput;
