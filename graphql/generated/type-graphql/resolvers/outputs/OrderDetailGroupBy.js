"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailAvgAggregate_1 = require("../outputs/OrderDetailAvgAggregate");
const OrderDetailCountAggregate_1 = require("../outputs/OrderDetailCountAggregate");
const OrderDetailMaxAggregate_1 = require("../outputs/OrderDetailMaxAggregate");
const OrderDetailMinAggregate_1 = require("../outputs/OrderDetailMinAggregate");
const OrderDetailSumAggregate_1 = require("../outputs/OrderDetailSumAggregate");
let OrderDetailGroupBy = class OrderDetailGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailGroupBy.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailGroupBy.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailGroupBy.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailCountAggregate_1.OrderDetailCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailCountAggregate_1.OrderDetailCountAggregate)
], OrderDetailGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailAvgAggregate_1.OrderDetailAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailAvgAggregate_1.OrderDetailAvgAggregate)
], OrderDetailGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailSumAggregate_1.OrderDetailSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailSumAggregate_1.OrderDetailSumAggregate)
], OrderDetailGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailMinAggregate_1.OrderDetailMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailMinAggregate_1.OrderDetailMinAggregate)
], OrderDetailGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailMaxAggregate_1.OrderDetailMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailMaxAggregate_1.OrderDetailMaxAggregate)
], OrderDetailGroupBy.prototype, "_max", void 0);
OrderDetailGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrderDetailGroupBy", {
        isAbstract: true
    })
], OrderDetailGroupBy);
exports.OrderDetailGroupBy = OrderDetailGroupBy;
