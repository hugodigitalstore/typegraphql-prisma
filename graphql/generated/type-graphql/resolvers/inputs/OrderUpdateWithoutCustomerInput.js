"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithoutCustomerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyUpdateOneRequiredWithoutOrderInput_1 = require("../inputs/CompanyUpdateOneRequiredWithoutOrderInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const OrderDetailUpdateManyWithoutOrderInput_1 = require("../inputs/OrderDetailUpdateManyWithoutOrderInput");
let OrderUpdateWithoutCustomerInput = class OrderUpdateWithoutCustomerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], OrderUpdateWithoutCustomerInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpdateOneRequiredWithoutOrderInput_1.CompanyUpdateOneRequiredWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyUpdateOneRequiredWithoutOrderInput_1.CompanyUpdateOneRequiredWithoutOrderInput)
], OrderUpdateWithoutCustomerInput.prototype, "company", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailUpdateManyWithoutOrderInput_1.OrderDetailUpdateManyWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailUpdateManyWithoutOrderInput_1.OrderDetailUpdateManyWithoutOrderInput)
], OrderUpdateWithoutCustomerInput.prototype, "OrderDetail", void 0);
OrderUpdateWithoutCustomerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithoutCustomerInput", {
        isAbstract: true
    })
], OrderUpdateWithoutCustomerInput);
exports.OrderUpdateWithoutCustomerInput = OrderUpdateWithoutCustomerInput;
