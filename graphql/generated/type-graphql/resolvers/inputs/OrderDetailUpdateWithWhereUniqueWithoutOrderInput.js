"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailUpdateWithWhereUniqueWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailUpdateWithoutOrderInput_1 = require("../inputs/OrderDetailUpdateWithoutOrderInput");
const OrderDetailWhereUniqueInput_1 = require("../inputs/OrderDetailWhereUniqueInput");
let OrderDetailUpdateWithWhereUniqueWithoutOrderInput = class OrderDetailUpdateWithWhereUniqueWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput)
], OrderDetailUpdateWithWhereUniqueWithoutOrderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailUpdateWithoutOrderInput_1.OrderDetailUpdateWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailUpdateWithoutOrderInput_1.OrderDetailUpdateWithoutOrderInput)
], OrderDetailUpdateWithWhereUniqueWithoutOrderInput.prototype, "data", void 0);
OrderDetailUpdateWithWhereUniqueWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailUpdateWithWhereUniqueWithoutOrderInput", {
        isAbstract: true
    })
], OrderDetailUpdateWithWhereUniqueWithoutOrderInput);
exports.OrderDetailUpdateWithWhereUniqueWithoutOrderInput = OrderDetailUpdateWithWhereUniqueWithoutOrderInput;
