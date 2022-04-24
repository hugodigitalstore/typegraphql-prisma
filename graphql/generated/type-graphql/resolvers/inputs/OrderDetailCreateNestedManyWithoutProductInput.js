"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailCreateNestedManyWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailCreateManyProductInputEnvelope_1 = require("../inputs/OrderDetailCreateManyProductInputEnvelope");
const OrderDetailCreateOrConnectWithoutProductInput_1 = require("../inputs/OrderDetailCreateOrConnectWithoutProductInput");
const OrderDetailCreateWithoutProductInput_1 = require("../inputs/OrderDetailCreateWithoutProductInput");
const OrderDetailWhereUniqueInput_1 = require("../inputs/OrderDetailWhereUniqueInput");
let OrderDetailCreateNestedManyWithoutProductInput = class OrderDetailCreateNestedManyWithoutProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailCreateWithoutProductInput_1.OrderDetailCreateWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailCreateNestedManyWithoutProductInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailCreateOrConnectWithoutProductInput_1.OrderDetailCreateOrConnectWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailCreateNestedManyWithoutProductInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailCreateManyProductInputEnvelope_1.OrderDetailCreateManyProductInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailCreateManyProductInputEnvelope_1.OrderDetailCreateManyProductInputEnvelope)
], OrderDetailCreateNestedManyWithoutProductInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailCreateNestedManyWithoutProductInput.prototype, "connect", void 0);
OrderDetailCreateNestedManyWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailCreateNestedManyWithoutProductInput", {
        isAbstract: true
    })
], OrderDetailCreateNestedManyWithoutProductInput);
exports.OrderDetailCreateNestedManyWithoutProductInput = OrderDetailCreateNestedManyWithoutProductInput;
