"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailUpdateManyWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailCreateManyProductInputEnvelope_1 = require("../inputs/OrderDetailCreateManyProductInputEnvelope");
const OrderDetailCreateOrConnectWithoutProductInput_1 = require("../inputs/OrderDetailCreateOrConnectWithoutProductInput");
const OrderDetailCreateWithoutProductInput_1 = require("../inputs/OrderDetailCreateWithoutProductInput");
const OrderDetailScalarWhereInput_1 = require("../inputs/OrderDetailScalarWhereInput");
const OrderDetailUpdateManyWithWhereWithoutProductInput_1 = require("../inputs/OrderDetailUpdateManyWithWhereWithoutProductInput");
const OrderDetailUpdateWithWhereUniqueWithoutProductInput_1 = require("../inputs/OrderDetailUpdateWithWhereUniqueWithoutProductInput");
const OrderDetailUpsertWithWhereUniqueWithoutProductInput_1 = require("../inputs/OrderDetailUpsertWithWhereUniqueWithoutProductInput");
const OrderDetailWhereUniqueInput_1 = require("../inputs/OrderDetailWhereUniqueInput");
let OrderDetailUpdateManyWithoutProductInput = class OrderDetailUpdateManyWithoutProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailCreateWithoutProductInput_1.OrderDetailCreateWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutProductInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailCreateOrConnectWithoutProductInput_1.OrderDetailCreateOrConnectWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutProductInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailUpsertWithWhereUniqueWithoutProductInput_1.OrderDetailUpsertWithWhereUniqueWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutProductInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailCreateManyProductInputEnvelope_1.OrderDetailCreateManyProductInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailCreateManyProductInputEnvelope_1.OrderDetailCreateManyProductInputEnvelope)
], OrderDetailUpdateManyWithoutProductInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutProductInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutProductInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutProductInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutProductInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailUpdateWithWhereUniqueWithoutProductInput_1.OrderDetailUpdateWithWhereUniqueWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutProductInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailUpdateManyWithWhereWithoutProductInput_1.OrderDetailUpdateManyWithWhereWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutProductInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailScalarWhereInput_1.OrderDetailScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutProductInput.prototype, "deleteMany", void 0);
OrderDetailUpdateManyWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailUpdateManyWithoutProductInput", {
        isAbstract: true
    })
], OrderDetailUpdateManyWithoutProductInput);
exports.OrderDetailUpdateManyWithoutProductInput = OrderDetailUpdateManyWithoutProductInput;
