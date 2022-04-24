"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailCreateWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateNestedOneWithoutOrderDetailInput_1 = require("../inputs/ProductCreateNestedOneWithoutOrderDetailInput");
let OrderDetailCreateWithoutOrderInput = class OrderDetailCreateWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutOrderDetailInput_1.ProductCreateNestedOneWithoutOrderDetailInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedOneWithoutOrderDetailInput_1.ProductCreateNestedOneWithoutOrderDetailInput)
], OrderDetailCreateWithoutOrderInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailCreateWithoutOrderInput.prototype, "quantity", void 0);
OrderDetailCreateWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailCreateWithoutOrderInput", {
        isAbstract: true
    })
], OrderDetailCreateWithoutOrderInput);
exports.OrderDetailCreateWithoutOrderInput = OrderDetailCreateWithoutOrderInput;
