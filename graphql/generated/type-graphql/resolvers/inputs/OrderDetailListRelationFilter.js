"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailWhereInput_1 = require("../inputs/OrderDetailWhereInput");
let OrderDetailListRelationFilter = class OrderDetailListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereInput_1.OrderDetailWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereInput_1.OrderDetailWhereInput)
], OrderDetailListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereInput_1.OrderDetailWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereInput_1.OrderDetailWhereInput)
], OrderDetailListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereInput_1.OrderDetailWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereInput_1.OrderDetailWhereInput)
], OrderDetailListRelationFilter.prototype, "none", void 0);
OrderDetailListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailListRelationFilter", {
        isAbstract: true
    })
], OrderDetailListRelationFilter);
exports.OrderDetailListRelationFilter = OrderDetailListRelationFilter;
