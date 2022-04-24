"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const OrderUpdateOneRequiredWithoutOrderDetailInput_1 = require("../inputs/OrderUpdateOneRequiredWithoutOrderDetailInput");
const ProductUpdateOneRequiredWithoutOrderDetailInput_1 = require("../inputs/ProductUpdateOneRequiredWithoutOrderDetailInput");
let OrderDetailUpdateInput = class OrderDetailUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateOneRequiredWithoutOrderDetailInput_1.OrderUpdateOneRequiredWithoutOrderDetailInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateOneRequiredWithoutOrderDetailInput_1.OrderUpdateOneRequiredWithoutOrderDetailInput)
], OrderDetailUpdateInput.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutOrderDetailInput_1.ProductUpdateOneRequiredWithoutOrderDetailInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateOneRequiredWithoutOrderDetailInput_1.ProductUpdateOneRequiredWithoutOrderDetailInput)
], OrderDetailUpdateInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], OrderDetailUpdateInput.prototype, "quantity", void 0);
OrderDetailUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailUpdateInput", {
        isAbstract: true
    })
], OrderDetailUpdateInput);
exports.OrderDetailUpdateInput = OrderDetailUpdateInput;
