"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateNestedOneWithoutProductInput_1 = require("../inputs/CompanyCreateNestedOneWithoutProductInput");
const OrderDetailCreateNestedManyWithoutProductInput_1 = require("../inputs/OrderDetailCreateNestedManyWithoutProductInput");
let ProductCreateInput = class ProductCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateNestedOneWithoutProductInput_1.CompanyCreateNestedOneWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyCreateNestedOneWithoutProductInput_1.CompanyCreateNestedOneWithoutProductInput)
], ProductCreateInput.prototype, "company", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailCreateNestedManyWithoutProductInput_1.OrderDetailCreateNestedManyWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailCreateNestedManyWithoutProductInput_1.OrderDetailCreateNestedManyWithoutProductInput)
], ProductCreateInput.prototype, "OrderDetail", void 0);
ProductCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateInput", {
        isAbstract: true
    })
], ProductCreateInput);
exports.ProductCreateInput = ProductCreateInput;
