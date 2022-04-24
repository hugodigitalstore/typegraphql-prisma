"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OrderMaxOrderByAggregateInput = class OrderMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderMaxOrderByAggregateInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderMaxOrderByAggregateInput.prototype, "customerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderMaxOrderByAggregateInput.prototype, "companyId", void 0);
OrderMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderMaxOrderByAggregateInput", {
        isAbstract: true
    })
], OrderMaxOrderByAggregateInput);
exports.OrderMaxOrderByAggregateInput = OrderMaxOrderByAggregateInput;
