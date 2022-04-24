"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOrderDetail = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailAvgAggregate_1 = require("../outputs/OrderDetailAvgAggregate");
const OrderDetailCountAggregate_1 = require("../outputs/OrderDetailCountAggregate");
const OrderDetailMaxAggregate_1 = require("../outputs/OrderDetailMaxAggregate");
const OrderDetailMinAggregate_1 = require("../outputs/OrderDetailMinAggregate");
const OrderDetailSumAggregate_1 = require("../outputs/OrderDetailSumAggregate");
let AggregateOrderDetail = class AggregateOrderDetail {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailCountAggregate_1.OrderDetailCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailCountAggregate_1.OrderDetailCountAggregate)
], AggregateOrderDetail.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailAvgAggregate_1.OrderDetailAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailAvgAggregate_1.OrderDetailAvgAggregate)
], AggregateOrderDetail.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailSumAggregate_1.OrderDetailSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailSumAggregate_1.OrderDetailSumAggregate)
], AggregateOrderDetail.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailMinAggregate_1.OrderDetailMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailMinAggregate_1.OrderDetailMinAggregate)
], AggregateOrderDetail.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailMaxAggregate_1.OrderDetailMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailMaxAggregate_1.OrderDetailMaxAggregate)
], AggregateOrderDetail.prototype, "_max", void 0);
AggregateOrderDetail = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateOrderDetail", {
        isAbstract: true
    })
], AggregateOrderDetail);
exports.AggregateOrderDetail = AggregateOrderDetail;
