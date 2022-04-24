"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
let OrderUpdateManyMutationInput = class OrderUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], OrderUpdateManyMutationInput.prototype, "amount", void 0);
OrderUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateManyMutationInput", {
        isAbstract: true
    })
], OrderUpdateManyMutationInput);
exports.OrderUpdateManyMutationInput = OrderUpdateManyMutationInput;
