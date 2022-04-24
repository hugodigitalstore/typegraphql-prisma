"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderDetailCreateManyInput = class OrderDetailCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailCreateManyInput.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailCreateManyInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailCreateManyInput.prototype, "quantity", void 0);
OrderDetailCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailCreateManyInput", {
        isAbstract: true
    })
], OrderDetailCreateManyInput);
exports.OrderDetailCreateManyInput = OrderDetailCreateManyInput;
