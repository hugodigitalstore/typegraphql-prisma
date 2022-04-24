"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OrderDetailAvgOrderByAggregateInput = class OrderDetailAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailAvgOrderByAggregateInput.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailAvgOrderByAggregateInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailAvgOrderByAggregateInput.prototype, "quantity", void 0);
OrderDetailAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailAvgOrderByAggregateInput", {
        isAbstract: true
    })
], OrderDetailAvgOrderByAggregateInput);
exports.OrderDetailAvgOrderByAggregateInput = OrderDetailAvgOrderByAggregateInput;
