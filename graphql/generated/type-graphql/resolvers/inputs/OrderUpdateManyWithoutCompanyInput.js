"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateManyWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyCompanyInputEnvelope_1 = require("../inputs/OrderCreateManyCompanyInputEnvelope");
const OrderCreateOrConnectWithoutCompanyInput_1 = require("../inputs/OrderCreateOrConnectWithoutCompanyInput");
const OrderCreateWithoutCompanyInput_1 = require("../inputs/OrderCreateWithoutCompanyInput");
const OrderScalarWhereInput_1 = require("../inputs/OrderScalarWhereInput");
const OrderUpdateManyWithWhereWithoutCompanyInput_1 = require("../inputs/OrderUpdateManyWithWhereWithoutCompanyInput");
const OrderUpdateWithWhereUniqueWithoutCompanyInput_1 = require("../inputs/OrderUpdateWithWhereUniqueWithoutCompanyInput");
const OrderUpsertWithWhereUniqueWithoutCompanyInput_1 = require("../inputs/OrderUpsertWithWhereUniqueWithoutCompanyInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateManyWithoutCompanyInput = class OrderUpdateManyWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutCompanyInput_1.OrderCreateWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCompanyInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutCompanyInput_1.OrderCreateOrConnectWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCompanyInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutCompanyInput_1.OrderUpsertWithWhereUniqueWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCompanyInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyCompanyInputEnvelope_1.OrderCreateManyCompanyInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManyCompanyInputEnvelope_1.OrderCreateManyCompanyInputEnvelope)
], OrderUpdateManyWithoutCompanyInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCompanyInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCompanyInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCompanyInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCompanyInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutCompanyInput_1.OrderUpdateWithWhereUniqueWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCompanyInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutCompanyInput_1.OrderUpdateManyWithWhereWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCompanyInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1.OrderScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutCompanyInput.prototype, "deleteMany", void 0);
OrderUpdateManyWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateManyWithoutCompanyInput", {
        isAbstract: true
    })
], OrderUpdateManyWithoutCompanyInput);
exports.OrderUpdateManyWithoutCompanyInput = OrderUpdateManyWithoutCompanyInput;
