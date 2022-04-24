"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyOrderByWithRelationInput_1 = require("../inputs/CompanyOrderByWithRelationInput");
const OrderDetailOrderByRelationAggregateInput_1 = require("../inputs/OrderDetailOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProductOrderByWithRelationInput = class ProductOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductOrderByWithRelationInput.prototype, "companyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyOrderByWithRelationInput_1.CompanyOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyOrderByWithRelationInput_1.CompanyOrderByWithRelationInput)
], ProductOrderByWithRelationInput.prototype, "company", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailOrderByRelationAggregateInput_1.OrderDetailOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailOrderByRelationAggregateInput_1.OrderDetailOrderByRelationAggregateInput)
], ProductOrderByWithRelationInput.prototype, "OrderDetail", void 0);
ProductOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductOrderByWithRelationInput", {
        isAbstract: true
    })
], ProductOrderByWithRelationInput);
exports.ProductOrderByWithRelationInput = ProductOrderByWithRelationInput;
