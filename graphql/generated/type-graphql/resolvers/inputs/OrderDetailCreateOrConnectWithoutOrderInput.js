"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailCreateOrConnectWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailCreateWithoutOrderInput_1 = require("../inputs/OrderDetailCreateWithoutOrderInput");
const OrderDetailWhereUniqueInput_1 = require("../inputs/OrderDetailWhereUniqueInput");
let OrderDetailCreateOrConnectWithoutOrderInput = class OrderDetailCreateOrConnectWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput)
], OrderDetailCreateOrConnectWithoutOrderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailCreateWithoutOrderInput_1.OrderDetailCreateWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailCreateWithoutOrderInput_1.OrderDetailCreateWithoutOrderInput)
], OrderDetailCreateOrConnectWithoutOrderInput.prototype, "create", void 0);
OrderDetailCreateOrConnectWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailCreateOrConnectWithoutOrderInput", {
        isAbstract: true
    })
], OrderDetailCreateOrConnectWithoutOrderInput);
exports.OrderDetailCreateOrConnectWithoutOrderInput = OrderDetailCreateOrConnectWithoutOrderInput;
