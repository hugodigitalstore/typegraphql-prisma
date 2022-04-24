"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OrderDetailMaxOrderByAggregateInput = class OrderDetailMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailMaxOrderByAggregateInput.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailMaxOrderByAggregateInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailMaxOrderByAggregateInput.prototype, "quantity", void 0);
OrderDetailMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailMaxOrderByAggregateInput", {
        isAbstract: true
    })
], OrderDetailMaxOrderByAggregateInput);
exports.OrderDetailMaxOrderByAggregateInput = OrderDetailMaxOrderByAggregateInput;
