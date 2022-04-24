"use strict";
var CompanyWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerListRelationFilter_1 = require("../inputs/CustomerListRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const OrderListRelationFilter_1 = require("../inputs/OrderListRelationFilter");
const ProductListRelationFilter_1 = require("../inputs/ProductListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let CompanyWhereInput = CompanyWhereInput_1 = class CompanyWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CompanyWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CompanyWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CompanyWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CompanyWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CompanyWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CompanyWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CompanyWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CompanyWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CompanyWhereInput.prototype, "adress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerListRelationFilter_1.CustomerListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerListRelationFilter_1.CustomerListRelationFilter)
], CompanyWhereInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderListRelationFilter_1.OrderListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderListRelationFilter_1.OrderListRelationFilter)
], CompanyWhereInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductListRelationFilter_1.ProductListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductListRelationFilter_1.ProductListRelationFilter)
], CompanyWhereInput.prototype, "Product", void 0);
CompanyWhereInput = CompanyWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyWhereInput", {
        isAbstract: true
    })
], CompanyWhereInput);
exports.CompanyWhereInput = CompanyWhereInput;
