"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderDetailAvgAggregate = class OrderDetailAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailAvgAggregate.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailAvgAggregate.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailAvgAggregate.prototype, "quantity", void 0);
OrderDetailAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrderDetailAvgAggregate", {
        isAbstract: true
    })
], OrderDetailAvgAggregate);
exports.OrderDetailAvgAggregate = OrderDetailAvgAggregate;
