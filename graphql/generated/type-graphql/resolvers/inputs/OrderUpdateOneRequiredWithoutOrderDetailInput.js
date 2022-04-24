"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateOneRequiredWithoutOrderDetailInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateOrConnectWithoutOrderDetailInput_1 = require("../inputs/OrderCreateOrConnectWithoutOrderDetailInput");
const OrderCreateWithoutOrderDetailInput_1 = require("../inputs/OrderCreateWithoutOrderDetailInput");
const OrderUpdateWithoutOrderDetailInput_1 = require("../inputs/OrderUpdateWithoutOrderDetailInput");
const OrderUpsertWithoutOrderDetailInput_1 = require("../inputs/OrderUpsertWithoutOrderDetailInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateOneRequiredWithoutOrderDetailInput = class OrderUpdateOneRequiredWithoutOrderDetailInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutOrderDetailInput_1.OrderCreateWithoutOrderDetailInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutOrderDetailInput_1.OrderCreateWithoutOrderDetailInput)
], OrderUpdateOneRequiredWithoutOrderDetailInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutOrderDetailInput_1.OrderCreateOrConnectWithoutOrderDetailInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateOrConnectWithoutOrderDetailInput_1.OrderCreateOrConnectWithoutOrderDetailInput)
], OrderUpdateOneRequiredWithoutOrderDetailInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpsertWithoutOrderDetailInput_1.OrderUpsertWithoutOrderDetailInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpsertWithoutOrderDetailInput_1.OrderUpsertWithoutOrderDetailInput)
], OrderUpdateOneRequiredWithoutOrderDetailInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpdateOneRequiredWithoutOrderDetailInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutOrderDetailInput_1.OrderUpdateWithoutOrderDetailInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutOrderDetailInput_1.OrderUpdateWithoutOrderDetailInput)
], OrderUpdateOneRequiredWithoutOrderDetailInput.prototype, "update", void 0);
OrderUpdateOneRequiredWithoutOrderDetailInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateOneRequiredWithoutOrderDetailInput", {
        isAbstract: true
    })
], OrderUpdateOneRequiredWithoutOrderDetailInput);
exports.OrderUpdateOneRequiredWithoutOrderDetailInput = OrderUpdateOneRequiredWithoutOrderDetailInput;
