"use strict";
var CustomerWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyRelationFilter_1 = require("../inputs/CompanyRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const OrderListRelationFilter_1 = require("../inputs/OrderListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let CustomerWhereInput = CustomerWhereInput_1 = class CustomerWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomerWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomerWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomerWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CustomerWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CustomerWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CustomerWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderListRelationFilter_1.OrderListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderListRelationFilter_1.OrderListRelationFilter)
], CustomerWhereInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CustomerWhereInput.prototype, "customerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyRelationFilter_1.CompanyRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyRelationFilter_1.CompanyRelationFilter)
], CustomerWhereInput.prototype, "Company", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], CustomerWhereInput.prototype, "companyId", void 0);
CustomerWhereInput = CustomerWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerWhereInput", {
        isAbstract: true
    })
], CustomerWhereInput);
exports.CustomerWhereInput = CustomerWhereInput;
