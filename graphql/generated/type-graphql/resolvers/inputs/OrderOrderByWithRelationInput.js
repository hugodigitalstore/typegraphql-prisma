"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyOrderByWithRelationInput_1 = require("../inputs/CompanyOrderByWithRelationInput");
const CustomerOrderByWithRelationInput_1 = require("../inputs/CustomerOrderByWithRelationInput");
const OrderDetailOrderByRelationAggregateInput_1 = require("../inputs/OrderDetailOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OrderOrderByWithRelationInput = class OrderOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderOrderByWithRelationInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderOrderByWithRelationInput.prototype, "customerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerOrderByWithRelationInput_1.CustomerOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerOrderByWithRelationInput_1.CustomerOrderByWithRelationInput)
], OrderOrderByWithRelationInput.prototype, "customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderOrderByWithRelationInput.prototype, "companyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyOrderByWithRelationInput_1.CompanyOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyOrderByWithRelationInput_1.CompanyOrderByWithRelationInput)
], OrderOrderByWithRelationInput.prototype, "company", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailOrderByRelationAggregateInput_1.OrderDetailOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailOrderByRelationAggregateInput_1.OrderDetailOrderByRelationAggregateInput)
], OrderOrderByWithRelationInput.prototype, "OrderDetail", void 0);
OrderOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderOrderByWithRelationInput", {
        isAbstract: true
    })
], OrderOrderByWithRelationInput);
exports.OrderOrderByWithRelationInput = OrderOrderByWithRelationInput;
