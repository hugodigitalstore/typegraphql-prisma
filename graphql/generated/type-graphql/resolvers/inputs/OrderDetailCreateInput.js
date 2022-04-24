"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateNestedOneWithoutOrderDetailInput_1 = require("../inputs/OrderCreateNestedOneWithoutOrderDetailInput");
const ProductCreateNestedOneWithoutOrderDetailInput_1 = require("../inputs/ProductCreateNestedOneWithoutOrderDetailInput");
let OrderDetailCreateInput = class OrderDetailCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutOrderDetailInput_1.OrderCreateNestedOneWithoutOrderDetailInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedOneWithoutOrderDetailInput_1.OrderCreateNestedOneWithoutOrderDetailInput)
], OrderDetailCreateInput.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutOrderDetailInput_1.ProductCreateNestedOneWithoutOrderDetailInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedOneWithoutOrderDetailInput_1.ProductCreateNestedOneWithoutOrderDetailInput)
], OrderDetailCreateInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailCreateInput.prototype, "quantity", void 0);
OrderDetailCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailCreateInput", {
        isAbstract: true
    })
], OrderDetailCreateInput);
exports.OrderDetailCreateInput = OrderDetailCreateInput;
