"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailUpsertWithWhereUniqueWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailCreateWithoutProductInput_1 = require("../inputs/OrderDetailCreateWithoutProductInput");
const OrderDetailUpdateWithoutProductInput_1 = require("../inputs/OrderDetailUpdateWithoutProductInput");
const OrderDetailWhereUniqueInput_1 = require("../inputs/OrderDetailWhereUniqueInput");
let OrderDetailUpsertWithWhereUniqueWithoutProductInput = class OrderDetailUpsertWithWhereUniqueWithoutProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput)
], OrderDetailUpsertWithWhereUniqueWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailUpdateWithoutProductInput_1.OrderDetailUpdateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailUpdateWithoutProductInput_1.OrderDetailUpdateWithoutProductInput)
], OrderDetailUpsertWithWhereUniqueWithoutProductInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailCreateWithoutProductInput_1.OrderDetailCreateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailCreateWithoutProductInput_1.OrderDetailCreateWithoutProductInput)
], OrderDetailUpsertWithWhereUniqueWithoutProductInput.prototype, "create", void 0);
OrderDetailUpsertWithWhereUniqueWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailUpsertWithWhereUniqueWithoutProductInput", {
        isAbstract: true
    })
], OrderDetailUpsertWithWhereUniqueWithoutProductInput);
exports.OrderDetailUpsertWithWhereUniqueWithoutProductInput = OrderDetailUpsertWithWhereUniqueWithoutProductInput;
