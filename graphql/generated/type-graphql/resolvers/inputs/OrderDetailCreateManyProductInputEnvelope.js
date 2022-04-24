"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailCreateManyProductInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailCreateManyProductInput_1 = require("../inputs/OrderDetailCreateManyProductInput");
let OrderDetailCreateManyProductInputEnvelope = class OrderDetailCreateManyProductInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailCreateManyProductInput_1.OrderDetailCreateManyProductInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailCreateManyProductInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrderDetailCreateManyProductInputEnvelope.prototype, "skipDuplicates", void 0);
OrderDetailCreateManyProductInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailCreateManyProductInputEnvelope", {
        isAbstract: true
    })
], OrderDetailCreateManyProductInputEnvelope);
exports.OrderDetailCreateManyProductInputEnvelope = OrderDetailCreateManyProductInputEnvelope;
