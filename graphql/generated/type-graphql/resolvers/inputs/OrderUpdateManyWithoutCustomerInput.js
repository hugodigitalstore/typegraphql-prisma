"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateManyWithoutCustomerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyCustomerInputEnvelope_1 = require("../inputs/OrderCreateManyCustomerInputEnvelope");
const OrderCreateOrConnectWithoutCustomerInput_1 = require("../inputs/OrderCreateOrConnectWithoutCustomerInput");
const OrderCreateWithoutCustomerInput_1 = require("../inputs/OrderCreateWithoutCustomerInput");
const OrderScalarWhereInput_1 = require("../inputs/OrderScalarWhereInput");
const OrderUpdateManyWithWhereWithoutCustomerInput_1 = require("../inputs/OrderUpdateManyWithWhereWithoutCustomerInput");
const OrderUpdateWithWhereUniqueWithoutCustomerInput_1 = require("../inputs/OrderUpdateWithWhereUniqueWithoutCustomerInput");
const OrderUpsertWithWhereUniqueWithoutCustomerInput_1 = require("../inputs/OrderUpsertWithWhereUniqueWithoutCustomerInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateManyWithoutCustomerInput = class OrderUpdateManyWithoutCustomerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutCustomerInput_1.OrderCreateWithoutCustomerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutCustomerInput_1.OrderCreateOrConnectWithoutCustomerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutCustomerInput_1.OrderUpsertWithWhereUniqueWithoutCustomerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyCustomerInputEnvelope_1.OrderCreateManyCustomerInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManyCustomerInputEnvelope_1.OrderCreateManyCustomerInputEnvelope)
], OrderUpdateManyWithoutCustomerInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutCustomerInput_1.OrderUpdateWithWhereUniqueWithoutCustomerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutCustomerInput_1.OrderUpdateManyWithWhereWithoutCustomerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1.OrderScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCustomerInput.prototype, "deleteMany", void 0);
OrderUpdateManyWithoutCustomerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateManyWithoutCustomerInput", {
        isAbstract: true
    })
], OrderUpdateManyWithoutCustomerInput);
exports.OrderUpdateManyWithoutCustomerInput = OrderUpdateManyWithoutCustomerInput;
