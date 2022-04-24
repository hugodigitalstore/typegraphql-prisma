"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailCreateManyOrderInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailCreateManyOrderInput_1 = require("../inputs/OrderDetailCreateManyOrderInput");
let OrderDetailCreateManyOrderInputEnvelope = class OrderDetailCreateManyOrderInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailCreateManyOrderInput_1.OrderDetailCreateManyOrderInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailCreateManyOrderInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrderDetailCreateManyOrderInputEnvelope.prototype, "skipDuplicates", void 0);
OrderDetailCreateManyOrderInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailCreateManyOrderInputEnvelope", {
        isAbstract: true
    })
], OrderDetailCreateManyOrderInputEnvelope);
exports.OrderDetailCreateManyOrderInputEnvelope = OrderDetailCreateManyOrderInputEnvelope;
