"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
let OrderDetailUpdateManyMutationInput = class OrderDetailUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], OrderDetailUpdateManyMutationInput.prototype, "quantity", void 0);
OrderDetailUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailUpdateManyMutationInput", {
        isAbstract: true
    })
], OrderDetailUpdateManyMutationInput);
exports.OrderDetailUpdateManyMutationInput = OrderDetailUpdateManyMutationInput;
