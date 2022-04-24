"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailUpdateManyWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailCreateManyOrderInputEnvelope_1 = require("../inputs/OrderDetailCreateManyOrderInputEnvelope");
const OrderDetailCreateOrConnectWithoutOrderInput_1 = require("../inputs/OrderDetailCreateOrConnectWithoutOrderInput");
const OrderDetailCreateWithoutOrderInput_1 = require("../inputs/OrderDetailCreateWithoutOrderInput");
const OrderDetailScalarWhereInput_1 = require("../inputs/OrderDetailScalarWhereInput");
const OrderDetailUpdateManyWithWhereWithoutOrderInput_1 = require("../inputs/OrderDetailUpdateManyWithWhereWithoutOrderInput");
const OrderDetailUpdateWithWhereUniqueWithoutOrderInput_1 = require("../inputs/OrderDetailUpdateWithWhereUniqueWithoutOrderInput");
const OrderDetailUpsertWithWhereUniqueWithoutOrderInput_1 = require("../inputs/OrderDetailUpsertWithWhereUniqueWithoutOrderInput");
const OrderDetailWhereUniqueInput_1 = require("../inputs/OrderDetailWhereUniqueInput");
let OrderDetailUpdateManyWithoutOrderInput = class OrderDetailUpdateManyWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailCreateWithoutOrderInput_1.OrderDetailCreateWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutOrderInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailCreateOrConnectWithoutOrderInput_1.OrderDetailCreateOrConnectWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutOrderInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailUpsertWithWhereUniqueWithoutOrderInput_1.OrderDetailUpsertWithWhereUniqueWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutOrderInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailCreateManyOrderInputEnvelope_1.OrderDetailCreateManyOrderInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailCreateManyOrderInputEnvelope_1.OrderDetailCreateManyOrderInputEnvelope)
], OrderDetailUpdateManyWithoutOrderInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutOrderInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutOrderInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutOrderInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutOrderInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailUpdateWithWhereUniqueWithoutOrderInput_1.OrderDetailUpdateWithWhereUniqueWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutOrderInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailUpdateManyWithWhereWithoutOrderInput_1.OrderDetailUpdateManyWithWhereWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutOrderInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailScalarWhereInput_1.OrderDetailScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailUpdateManyWithoutOrderInput.prototype, "deleteMany", void 0);
OrderDetailUpdateManyWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailUpdateManyWithoutOrderInput", {
        isAbstract: true
    })
], OrderDetailUpdateManyWithoutOrderInput);
exports.OrderDetailUpdateManyWithoutOrderInput = OrderDetailUpdateManyWithoutOrderInput;
