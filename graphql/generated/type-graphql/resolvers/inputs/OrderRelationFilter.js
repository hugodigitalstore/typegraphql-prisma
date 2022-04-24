"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderWhereInput_1 = require("../inputs/OrderWhereInput");
let OrderRelationFilter = class OrderRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereInput_1.OrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereInput_1.OrderWhereInput)
], OrderRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereInput_1.OrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereInput_1.OrderWhereInput)
], OrderRelationFilter.prototype, "isNot", void 0);
OrderRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderRelationFilter", {
        isAbstract: true
    })
], OrderRelationFilter);
exports.OrderRelationFilter = OrderRelationFilter;
