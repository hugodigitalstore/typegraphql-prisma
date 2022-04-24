"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OrderSumOrderByAggregateInput = class OrderSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderSumOrderByAggregateInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderSumOrderByAggregateInput.prototype, "customerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderSumOrderByAggregateInput.prototype, "companyId", void 0);
OrderSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderSumOrderByAggregateInput", {
        isAbstract: true
    })
], OrderSumOrderByAggregateInput);
exports.OrderSumOrderByAggregateInput = OrderSumOrderByAggregateInput;
