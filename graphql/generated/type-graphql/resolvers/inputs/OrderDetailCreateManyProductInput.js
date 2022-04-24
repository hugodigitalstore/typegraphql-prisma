"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailCreateManyProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderDetailCreateManyProductInput = class OrderDetailCreateManyProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailCreateManyProductInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailCreateManyProductInput.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailCreateManyProductInput.prototype, "quantity", void 0);
OrderDetailCreateManyProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailCreateManyProductInput", {
        isAbstract: true
    })
], OrderDetailCreateManyProductInput);
exports.OrderDetailCreateManyProductInput = OrderDetailCreateManyProductInput;
