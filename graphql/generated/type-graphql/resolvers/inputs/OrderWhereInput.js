"use strict";
var OrderWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyRelationFilter_1 = require("../inputs/CompanyRelationFilter");
const CustomerRelationFilter_1 = require("../inputs/CustomerRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const OrderDetailListRelationFilter_1 = require("../inputs/OrderDetailListRelationFilter");
let OrderWhereInput = OrderWhereInput_1 = class OrderWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OrderWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OrderWhereInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OrderWhereInput.prototype, "customerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerRelationFilter_1.CustomerRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerRelationFilter_1.CustomerRelationFilter)
], OrderWhereInput.prototype, "customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OrderWhereInput.prototype, "companyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyRelationFilter_1.CompanyRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyRelationFilter_1.CompanyRelationFilter)
], OrderWhereInput.prototype, "company", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailListRelationFilter_1.OrderDetailListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailListRelationFilter_1.OrderDetailListRelationFilter)
], OrderWhereInput.prototype, "OrderDetail", void 0);
OrderWhereInput = OrderWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderWhereInput", {
        isAbstract: true
    })
], OrderWhereInput);
exports.OrderWhereInput = OrderWhereInput;
