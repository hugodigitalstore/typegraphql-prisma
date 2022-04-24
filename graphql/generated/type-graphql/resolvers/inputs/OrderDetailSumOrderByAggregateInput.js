"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OrderDetailSumOrderByAggregateInput = class OrderDetailSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailSumOrderByAggregateInput.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailSumOrderByAggregateInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailSumOrderByAggregateInput.prototype, "quantity", void 0);
OrderDetailSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailSumOrderByAggregateInput", {
        isAbstract: true
    })
], OrderDetailSumOrderByAggregateInput);
exports.OrderDetailSumOrderByAggregateInput = OrderDetailSumOrderByAggregateInput;
