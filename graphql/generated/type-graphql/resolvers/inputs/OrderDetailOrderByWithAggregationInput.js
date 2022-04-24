"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailAvgOrderByAggregateInput_1 = require("../inputs/OrderDetailAvgOrderByAggregateInput");
const OrderDetailCountOrderByAggregateInput_1 = require("../inputs/OrderDetailCountOrderByAggregateInput");
const OrderDetailMaxOrderByAggregateInput_1 = require("../inputs/OrderDetailMaxOrderByAggregateInput");
const OrderDetailMinOrderByAggregateInput_1 = require("../inputs/OrderDetailMinOrderByAggregateInput");
const OrderDetailSumOrderByAggregateInput_1 = require("../inputs/OrderDetailSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OrderDetailOrderByWithAggregationInput = class OrderDetailOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailOrderByWithAggregationInput.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailOrderByWithAggregationInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailOrderByWithAggregationInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailCountOrderByAggregateInput_1.OrderDetailCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailCountOrderByAggregateInput_1.OrderDetailCountOrderByAggregateInput)
], OrderDetailOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailAvgOrderByAggregateInput_1.OrderDetailAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailAvgOrderByAggregateInput_1.OrderDetailAvgOrderByAggregateInput)
], OrderDetailOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailMaxOrderByAggregateInput_1.OrderDetailMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailMaxOrderByAggregateInput_1.OrderDetailMaxOrderByAggregateInput)
], OrderDetailOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailMinOrderByAggregateInput_1.OrderDetailMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailMinOrderByAggregateInput_1.OrderDetailMinOrderByAggregateInput)
], OrderDetailOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailSumOrderByAggregateInput_1.OrderDetailSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailSumOrderByAggregateInput_1.OrderDetailSumOrderByAggregateInput)
], OrderDetailOrderByWithAggregationInput.prototype, "_sum", void 0);
OrderDetailOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailOrderByWithAggregationInput", {
        isAbstract: true
    })
], OrderDetailOrderByWithAggregationInput);
exports.OrderDetailOrderByWithAggregationInput = OrderDetailOrderByWithAggregationInput;
