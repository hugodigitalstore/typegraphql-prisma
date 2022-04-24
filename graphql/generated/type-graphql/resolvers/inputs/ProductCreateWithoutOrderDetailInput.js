"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutOrderDetailInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateNestedOneWithoutProductInput_1 = require("../inputs/CompanyCreateNestedOneWithoutProductInput");
let ProductCreateWithoutOrderDetailInput = class ProductCreateWithoutOrderDetailInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutOrderDetailInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutOrderDetailInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateNestedOneWithoutProductInput_1.CompanyCreateNestedOneWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyCreateNestedOneWithoutProductInput_1.CompanyCreateNestedOneWithoutProductInput)
], ProductCreateWithoutOrderDetailInput.prototype, "company", void 0);
ProductCreateWithoutOrderDetailInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateWithoutOrderDetailInput", {
        isAbstract: true
    })
], ProductCreateWithoutOrderDetailInput);
exports.ProductCreateWithoutOrderDetailInput = ProductCreateWithoutOrderDetailInput;
