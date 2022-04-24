"use strict";
var OrderDetailWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const OrderRelationFilter_1 = require("../inputs/OrderRelationFilter");
const ProductRelationFilter_1 = require("../inputs/ProductRelationFilter");
let OrderDetailWhereInput = OrderDetailWhereInput_1 = class OrderDetailWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderDetailWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OrderDetailWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OrderDetailWhereInput.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderRelationFilter_1.OrderRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderRelationFilter_1.OrderRelationFilter)
], OrderDetailWhereInput.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductRelationFilter_1.ProductRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductRelationFilter_1.ProductRelationFilter)
], OrderDetailWhereInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OrderDetailWhereInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OrderDetailWhereInput.prototype, "quantity", void 0);
OrderDetailWhereInput = OrderDetailWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailWhereInput", {
        isAbstract: true
    })
], OrderDetailWhereInput);
exports.OrderDetailWhereInput = OrderDetailWhereInput;
