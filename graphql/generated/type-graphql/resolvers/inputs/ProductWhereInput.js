"use strict";
var ProductWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyRelationFilter_1 = require("../inputs/CompanyRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const OrderDetailListRelationFilter_1 = require("../inputs/OrderDetailListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ProductWhereInput = ProductWhereInput_1 = class ProductWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ProductWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ProductWhereInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ProductWhereInput.prototype, "companyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyRelationFilter_1.CompanyRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyRelationFilter_1.CompanyRelationFilter)
], ProductWhereInput.prototype, "company", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailListRelationFilter_1.OrderDetailListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailListRelationFilter_1.OrderDetailListRelationFilter)
], ProductWhereInput.prototype, "OrderDetail", void 0);
ProductWhereInput = ProductWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductWhereInput", {
        isAbstract: true
    })
], ProductWhereInput);
exports.ProductWhereInput = ProductWhereInput;
