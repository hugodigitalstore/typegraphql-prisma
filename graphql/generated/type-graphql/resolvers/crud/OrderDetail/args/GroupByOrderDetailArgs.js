"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOrderDetailArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailOrderByWithAggregationInput_1 = require("../../../inputs/OrderDetailOrderByWithAggregationInput");
const OrderDetailScalarWhereWithAggregatesInput_1 = require("../../../inputs/OrderDetailScalarWhereWithAggregatesInput");
const OrderDetailWhereInput_1 = require("../../../inputs/OrderDetailWhereInput");
const OrderDetailScalarFieldEnum_1 = require("../../../../enums/OrderDetailScalarFieldEnum");
let GroupByOrderDetailArgs = class GroupByOrderDetailArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereInput_1.OrderDetailWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereInput_1.OrderDetailWhereInput)
], GroupByOrderDetailArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailOrderByWithAggregationInput_1.OrderDetailOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOrderDetailArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailScalarFieldEnum_1.OrderDetailScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOrderDetailArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailScalarWhereWithAggregatesInput_1.OrderDetailScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailScalarWhereWithAggregatesInput_1.OrderDetailScalarWhereWithAggregatesInput)
], GroupByOrderDetailArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOrderDetailArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOrderDetailArgs.prototype, "skip", void 0);
GroupByOrderDetailArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByOrderDetailArgs);
exports.GroupByOrderDetailArgs = GroupByOrderDetailArgs;
