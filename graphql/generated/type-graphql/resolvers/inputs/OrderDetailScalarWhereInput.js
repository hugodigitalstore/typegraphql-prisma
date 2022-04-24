"use strict";
var OrderDetailScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
let OrderDetailScalarWhereInput = OrderDetailScalarWhereInput_1 = class OrderDetailScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OrderDetailScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OrderDetailScalarWhereInput.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OrderDetailScalarWhereInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OrderDetailScalarWhereInput.prototype, "quantity", void 0);
OrderDetailScalarWhereInput = OrderDetailScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailScalarWhereInput", {
        isAbstract: true
    })
], OrderDetailScalarWhereInput);
exports.OrderDetailScalarWhereInput = OrderDetailScalarWhereInput;
