"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailCreateNestedManyWithoutProductInput_1 = require("../inputs/OrderDetailCreateNestedManyWithoutProductInput");
let ProductCreateWithoutCompanyInput = class ProductCreateWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutCompanyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutCompanyInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailCreateNestedManyWithoutProductInput_1.OrderDetailCreateNestedManyWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailCreateNestedManyWithoutProductInput_1.OrderDetailCreateNestedManyWithoutProductInput)
], ProductCreateWithoutCompanyInput.prototype, "OrderDetail", void 0);
ProductCreateWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateWithoutCompanyInput", {
        isAbstract: true
    })
], ProductCreateWithoutCompanyInput);
exports.ProductCreateWithoutCompanyInput = ProductCreateWithoutCompanyInput;
