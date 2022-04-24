"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailUpdateWithWhereUniqueWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailUpdateWithoutProductInput_1 = require("../inputs/OrderDetailUpdateWithoutProductInput");
const OrderDetailWhereUniqueInput_1 = require("../inputs/OrderDetailWhereUniqueInput");
let OrderDetailUpdateWithWhereUniqueWithoutProductInput = class OrderDetailUpdateWithWhereUniqueWithoutProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput)
], OrderDetailUpdateWithWhereUniqueWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailUpdateWithoutProductInput_1.OrderDetailUpdateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailUpdateWithoutProductInput_1.OrderDetailUpdateWithoutProductInput)
], OrderDetailUpdateWithWhereUniqueWithoutProductInput.prototype, "data", void 0);
OrderDetailUpdateWithWhereUniqueWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailUpdateWithWhereUniqueWithoutProductInput", {
        isAbstract: true
    })
], OrderDetailUpdateWithWhereUniqueWithoutProductInput);
exports.OrderDetailUpdateWithWhereUniqueWithoutProductInput = OrderDetailUpdateWithWhereUniqueWithoutProductInput;
