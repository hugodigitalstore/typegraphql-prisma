"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderDetailMinAggregate = class OrderDetailMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailMinAggregate.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailMinAggregate.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailMinAggregate.prototype, "quantity", void 0);
OrderDetailMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrderDetailMinAggregate", {
        isAbstract: true
    })
], OrderDetailMinAggregate);
exports.OrderDetailMinAggregate = OrderDetailMinAggregate;
