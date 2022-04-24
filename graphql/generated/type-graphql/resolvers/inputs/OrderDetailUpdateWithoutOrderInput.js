"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailUpdateWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const ProductUpdateOneRequiredWithoutOrderDetailInput_1 = require("../inputs/ProductUpdateOneRequiredWithoutOrderDetailInput");
let OrderDetailUpdateWithoutOrderInput = class OrderDetailUpdateWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutOrderDetailInput_1.ProductUpdateOneRequiredWithoutOrderDetailInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateOneRequiredWithoutOrderDetailInput_1.ProductUpdateOneRequiredWithoutOrderDetailInput)
], OrderDetailUpdateWithoutOrderInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], OrderDetailUpdateWithoutOrderInput.prototype, "quantity", void 0);
OrderDetailUpdateWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailUpdateWithoutOrderInput", {
        isAbstract: true
    })
], OrderDetailUpdateWithoutOrderInput);
exports.OrderDetailUpdateWithoutOrderInput = OrderDetailUpdateWithoutOrderInput;
