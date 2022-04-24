"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderOrderByWithRelationInput_1 = require("../inputs/OrderOrderByWithRelationInput");
const ProductOrderByWithRelationInput_1 = require("../inputs/ProductOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OrderDetailOrderByWithRelationInput = class OrderDetailOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailOrderByWithRelationInput.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderOrderByWithRelationInput_1.OrderOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderOrderByWithRelationInput_1.OrderOrderByWithRelationInput)
], OrderDetailOrderByWithRelationInput.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput)
], OrderDetailOrderByWithRelationInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailOrderByWithRelationInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailOrderByWithRelationInput.prototype, "quantity", void 0);
OrderDetailOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailOrderByWithRelationInput", {
        isAbstract: true
    })
], OrderDetailOrderByWithRelationInput);
exports.OrderDetailOrderByWithRelationInput = OrderDetailOrderByWithRelationInput;
