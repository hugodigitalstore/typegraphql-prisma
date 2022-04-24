"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderDetailMaxAggregate = class OrderDetailMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailMaxAggregate.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailMaxAggregate.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailMaxAggregate.prototype, "quantity", void 0);
OrderDetailMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrderDetailMaxAggregate", {
        isAbstract: true
    })
], OrderDetailMaxAggregate);
exports.OrderDetailMaxAggregate = OrderDetailMaxAggregate;
