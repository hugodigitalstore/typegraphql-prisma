"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderAvgAggregate_1 = require("../outputs/OrderAvgAggregate");
const OrderCountAggregate_1 = require("../outputs/OrderCountAggregate");
const OrderMaxAggregate_1 = require("../outputs/OrderMaxAggregate");
const OrderMinAggregate_1 = require("../outputs/OrderMinAggregate");
const OrderSumAggregate_1 = require("../outputs/OrderSumAggregate");
let OrderGroupBy = class OrderGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderGroupBy.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderGroupBy.prototype, "customerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderGroupBy.prototype, "companyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCountAggregate_1.OrderCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCountAggregate_1.OrderCountAggregate)
], OrderGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderAvgAggregate_1.OrderAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderAvgAggregate_1.OrderAvgAggregate)
], OrderGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderSumAggregate_1.OrderSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderSumAggregate_1.OrderSumAggregate)
], OrderGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderMinAggregate_1.OrderMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderMinAggregate_1.OrderMinAggregate)
], OrderGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderMaxAggregate_1.OrderMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderMaxAggregate_1.OrderMaxAggregate)
], OrderGroupBy.prototype, "_max", void 0);
OrderGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrderGroupBy", {
        isAbstract: true
    })
], OrderGroupBy);
exports.OrderGroupBy = OrderGroupBy;
