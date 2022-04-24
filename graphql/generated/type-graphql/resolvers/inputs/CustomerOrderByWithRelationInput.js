"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyOrderByWithRelationInput_1 = require("../inputs/CompanyOrderByWithRelationInput");
const OrderOrderByRelationAggregateInput_1 = require("../inputs/OrderOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CustomerOrderByWithRelationInput = class CustomerOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerOrderByWithRelationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderOrderByRelationAggregateInput_1.OrderOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderOrderByRelationAggregateInput_1.OrderOrderByRelationAggregateInput)
], CustomerOrderByWithRelationInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerOrderByWithRelationInput.prototype, "customerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyOrderByWithRelationInput_1.CompanyOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyOrderByWithRelationInput_1.CompanyOrderByWithRelationInput)
], CustomerOrderByWithRelationInput.prototype, "Company", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerOrderByWithRelationInput.prototype, "companyId", void 0);
CustomerOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerOrderByWithRelationInput", {
        isAbstract: true
    })
], CustomerOrderByWithRelationInput);
exports.CustomerOrderByWithRelationInput = CustomerOrderByWithRelationInput;
