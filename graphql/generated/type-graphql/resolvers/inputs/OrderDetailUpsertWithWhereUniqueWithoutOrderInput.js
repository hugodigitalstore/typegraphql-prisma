"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailUpsertWithWhereUniqueWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailCreateWithoutOrderInput_1 = require("../inputs/OrderDetailCreateWithoutOrderInput");
const OrderDetailUpdateWithoutOrderInput_1 = require("../inputs/OrderDetailUpdateWithoutOrderInput");
const OrderDetailWhereUniqueInput_1 = require("../inputs/OrderDetailWhereUniqueInput");
let OrderDetailUpsertWithWhereUniqueWithoutOrderInput = class OrderDetailUpsertWithWhereUniqueWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput)
], OrderDetailUpsertWithWhereUniqueWithoutOrderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailUpdateWithoutOrderInput_1.OrderDetailUpdateWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailUpdateWithoutOrderInput_1.OrderDetailUpdateWithoutOrderInput)
], OrderDetailUpsertWithWhereUniqueWithoutOrderInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailCreateWithoutOrderInput_1.OrderDetailCreateWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailCreateWithoutOrderInput_1.OrderDetailCreateWithoutOrderInput)
], OrderDetailUpsertWithWhereUniqueWithoutOrderInput.prototype, "create", void 0);
OrderDetailUpsertWithWhereUniqueWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailUpsertWithWhereUniqueWithoutOrderInput", {
        isAbstract: true
    })
], OrderDetailUpsertWithWhereUniqueWithoutOrderInput);
exports.OrderDetailUpsertWithWhereUniqueWithoutOrderInput = OrderDetailUpsertWithWhereUniqueWithoutOrderInput;
