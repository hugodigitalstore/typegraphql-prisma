"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailUpdateManyWithWhereWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailScalarWhereInput_1 = require("../inputs/OrderDetailScalarWhereInput");
const OrderDetailUpdateManyMutationInput_1 = require("../inputs/OrderDetailUpdateManyMutationInput");
let OrderDetailUpdateManyWithWhereWithoutProductInput = class OrderDetailUpdateManyWithWhereWithoutProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailScalarWhereInput_1.OrderDetailScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailScalarWhereInput_1.OrderDetailScalarWhereInput)
], OrderDetailUpdateManyWithWhereWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailUpdateManyMutationInput_1.OrderDetailUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailUpdateManyMutationInput_1.OrderDetailUpdateManyMutationInput)
], OrderDetailUpdateManyWithWhereWithoutProductInput.prototype, "data", void 0);
OrderDetailUpdateManyWithWhereWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailUpdateManyWithWhereWithoutProductInput", {
        isAbstract: true
    })
], OrderDetailUpdateManyWithWhereWithoutProductInput);
exports.OrderDetailUpdateManyWithWhereWithoutProductInput = OrderDetailUpdateManyWithWhereWithoutProductInput;
