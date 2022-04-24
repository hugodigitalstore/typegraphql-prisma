"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailCreateWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateNestedOneWithoutOrderDetailInput_1 = require("../inputs/OrderCreateNestedOneWithoutOrderDetailInput");
let OrderDetailCreateWithoutProductInput = class OrderDetailCreateWithoutProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutOrderDetailInput_1.OrderCreateNestedOneWithoutOrderDetailInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedOneWithoutOrderDetailInput_1.OrderCreateNestedOneWithoutOrderDetailInput)
], OrderDetailCreateWithoutProductInput.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailCreateWithoutProductInput.prototype, "quantity", void 0);
OrderDetailCreateWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailCreateWithoutProductInput", {
        isAbstract: true
    })
], OrderDetailCreateWithoutProductInput);
exports.OrderDetailCreateWithoutProductInput = OrderDetailCreateWithoutProductInput;
