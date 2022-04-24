"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailUpdateWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const OrderUpdateOneRequiredWithoutOrderDetailInput_1 = require("../inputs/OrderUpdateOneRequiredWithoutOrderDetailInput");
let OrderDetailUpdateWithoutProductInput = class OrderDetailUpdateWithoutProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateOneRequiredWithoutOrderDetailInput_1.OrderUpdateOneRequiredWithoutOrderDetailInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateOneRequiredWithoutOrderDetailInput_1.OrderUpdateOneRequiredWithoutOrderDetailInput)
], OrderDetailUpdateWithoutProductInput.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], OrderDetailUpdateWithoutProductInput.prototype, "quantity", void 0);
OrderDetailUpdateWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailUpdateWithoutProductInput", {
        isAbstract: true
    })
], OrderDetailUpdateWithoutProductInput);
exports.OrderDetailUpdateWithoutProductInput = OrderDetailUpdateWithoutProductInput;
