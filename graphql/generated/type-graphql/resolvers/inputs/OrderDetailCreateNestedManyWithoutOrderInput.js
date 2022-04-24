"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailCreateNestedManyWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailCreateManyOrderInputEnvelope_1 = require("../inputs/OrderDetailCreateManyOrderInputEnvelope");
const OrderDetailCreateOrConnectWithoutOrderInput_1 = require("../inputs/OrderDetailCreateOrConnectWithoutOrderInput");
const OrderDetailCreateWithoutOrderInput_1 = require("../inputs/OrderDetailCreateWithoutOrderInput");
const OrderDetailWhereUniqueInput_1 = require("../inputs/OrderDetailWhereUniqueInput");
let OrderDetailCreateNestedManyWithoutOrderInput = class OrderDetailCreateNestedManyWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailCreateWithoutOrderInput_1.OrderDetailCreateWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailCreateNestedManyWithoutOrderInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailCreateOrConnectWithoutOrderInput_1.OrderDetailCreateOrConnectWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailCreateNestedManyWithoutOrderInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailCreateManyOrderInputEnvelope_1.OrderDetailCreateManyOrderInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailCreateManyOrderInputEnvelope_1.OrderDetailCreateManyOrderInputEnvelope)
], OrderDetailCreateNestedManyWithoutOrderInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailCreateNestedManyWithoutOrderInput.prototype, "connect", void 0);
OrderDetailCreateNestedManyWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailCreateNestedManyWithoutOrderInput", {
        isAbstract: true
    })
], OrderDetailCreateNestedManyWithoutOrderInput);
exports.OrderDetailCreateNestedManyWithoutOrderInput = OrderDetailCreateNestedManyWithoutOrderInput;
