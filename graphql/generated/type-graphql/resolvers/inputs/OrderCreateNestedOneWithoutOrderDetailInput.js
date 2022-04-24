"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateNestedOneWithoutOrderDetailInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateOrConnectWithoutOrderDetailInput_1 = require("../inputs/OrderCreateOrConnectWithoutOrderDetailInput");
const OrderCreateWithoutOrderDetailInput_1 = require("../inputs/OrderCreateWithoutOrderDetailInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateNestedOneWithoutOrderDetailInput = class OrderCreateNestedOneWithoutOrderDetailInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutOrderDetailInput_1.OrderCreateWithoutOrderDetailInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutOrderDetailInput_1.OrderCreateWithoutOrderDetailInput)
], OrderCreateNestedOneWithoutOrderDetailInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutOrderDetailInput_1.OrderCreateOrConnectWithoutOrderDetailInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateOrConnectWithoutOrderDetailInput_1.OrderCreateOrConnectWithoutOrderDetailInput)
], OrderCreateNestedOneWithoutOrderDetailInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateNestedOneWithoutOrderDetailInput.prototype, "connect", void 0);
OrderCreateNestedOneWithoutOrderDetailInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateNestedOneWithoutOrderDetailInput", {
        isAbstract: true
    })
], OrderCreateNestedOneWithoutOrderDetailInput);
exports.OrderCreateNestedOneWithoutOrderDetailInput = OrderCreateNestedOneWithoutOrderDetailInput;
