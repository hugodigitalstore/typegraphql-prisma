"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerOrderByRelationAggregateInput_1 = require("../inputs/CustomerOrderByRelationAggregateInput");
const OrderOrderByRelationAggregateInput_1 = require("../inputs/OrderOrderByRelationAggregateInput");
const ProductOrderByRelationAggregateInput_1 = require("../inputs/ProductOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CompanyOrderByWithRelationInput = class CompanyOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyOrderByWithRelationInput.prototype, "adress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerOrderByRelationAggregateInput_1.CustomerOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerOrderByRelationAggregateInput_1.CustomerOrderByRelationAggregateInput)
], CompanyOrderByWithRelationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderOrderByRelationAggregateInput_1.OrderOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderOrderByRelationAggregateInput_1.OrderOrderByRelationAggregateInput)
], CompanyOrderByWithRelationInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductOrderByRelationAggregateInput_1.ProductOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductOrderByRelationAggregateInput_1.ProductOrderByRelationAggregateInput)
], CompanyOrderByWithRelationInput.prototype, "Product", void 0);
CompanyOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyOrderByWithRelationInput", {
        isAbstract: true
    })
], CompanyOrderByWithRelationInput);
exports.CompanyOrderByWithRelationInput = CompanyOrderByWithRelationInput;
