"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateOrConnectWithoutOrderDetailInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutOrderDetailInput_1 = require("../inputs/OrderCreateWithoutOrderDetailInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateOrConnectWithoutOrderDetailInput = class OrderCreateOrConnectWithoutOrderDetailInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutOrderDetailInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutOrderDetailInput_1.OrderCreateWithoutOrderDetailInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutOrderDetailInput_1.OrderCreateWithoutOrderDetailInput)
], OrderCreateOrConnectWithoutOrderDetailInput.prototype, "create", void 0);
OrderCreateOrConnectWithoutOrderDetailInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateOrConnectWithoutOrderDetailInput", {
        isAbstract: true
    })
], OrderCreateOrConnectWithoutOrderDetailInput);
exports.OrderCreateOrConnectWithoutOrderDetailInput = OrderCreateOrConnectWithoutOrderDetailInput;
