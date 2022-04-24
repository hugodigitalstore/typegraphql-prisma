"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailCreateOrConnectWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailCreateWithoutProductInput_1 = require("../inputs/OrderDetailCreateWithoutProductInput");
const OrderDetailWhereUniqueInput_1 = require("../inputs/OrderDetailWhereUniqueInput");
let OrderDetailCreateOrConnectWithoutProductInput = class OrderDetailCreateOrConnectWithoutProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput)
], OrderDetailCreateOrConnectWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailCreateWithoutProductInput_1.OrderDetailCreateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailCreateWithoutProductInput_1.OrderDetailCreateWithoutProductInput)
], OrderDetailCreateOrConnectWithoutProductInput.prototype, "create", void 0);
OrderDetailCreateOrConnectWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailCreateOrConnectWithoutProductInput", {
        isAbstract: true
    })
], OrderDetailCreateOrConnectWithoutProductInput);
exports.OrderDetailCreateOrConnectWithoutProductInput = OrderDetailCreateOrConnectWithoutProductInput;
