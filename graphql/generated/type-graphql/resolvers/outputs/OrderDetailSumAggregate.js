"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderDetailSumAggregate = class OrderDetailSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailSumAggregate.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailSumAggregate.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailSumAggregate.prototype, "quantity", void 0);
OrderDetailSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrderDetailSumAggregate", {
        isAbstract: true
    })
], OrderDetailSumAggregate);
exports.OrderDetailSumAggregate = OrderDetailSumAggregate;
