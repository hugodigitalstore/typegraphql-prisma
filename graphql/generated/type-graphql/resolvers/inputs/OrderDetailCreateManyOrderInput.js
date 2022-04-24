"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailCreateManyOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderDetailCreateManyOrderInput = class OrderDetailCreateManyOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailCreateManyOrderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailCreateManyOrderInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailCreateManyOrderInput.prototype, "quantity", void 0);
OrderDetailCreateManyOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailCreateManyOrderInput", {
        isAbstract: true
    })
], OrderDetailCreateManyOrderInput);
exports.OrderDetailCreateManyOrderInput = OrderDetailCreateManyOrderInput;
