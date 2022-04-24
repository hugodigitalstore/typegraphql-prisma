"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpsertWithoutOrderDetailInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutOrderDetailInput_1 = require("../inputs/OrderCreateWithoutOrderDetailInput");
const OrderUpdateWithoutOrderDetailInput_1 = require("../inputs/OrderUpdateWithoutOrderDetailInput");
let OrderUpsertWithoutOrderDetailInput = class OrderUpsertWithoutOrderDetailInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutOrderDetailInput_1.OrderUpdateWithoutOrderDetailInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutOrderDetailInput_1.OrderUpdateWithoutOrderDetailInput)
], OrderUpsertWithoutOrderDetailInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutOrderDetailInput_1.OrderCreateWithoutOrderDetailInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutOrderDetailInput_1.OrderCreateWithoutOrderDetailInput)
], OrderUpsertWithoutOrderDetailInput.prototype, "create", void 0);
OrderUpsertWithoutOrderDetailInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpsertWithoutOrderDetailInput", {
        isAbstract: true
    })
], OrderUpsertWithoutOrderDetailInput);
exports.OrderUpsertWithoutOrderDetailInput = OrderUpsertWithoutOrderDetailInput;
