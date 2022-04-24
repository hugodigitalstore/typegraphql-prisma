"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateNestedManyWithoutCompanyInput_1 = require("../inputs/OrderCreateNestedManyWithoutCompanyInput");
const ProductCreateNestedManyWithoutCompanyInput_1 = require("../inputs/ProductCreateNestedManyWithoutCompanyInput");
let CompanyCreateWithoutCustomersInput = class CompanyCreateWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CompanyCreateWithoutCustomersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyCreateWithoutCustomersInput.prototype, "adress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutCompanyInput_1.OrderCreateNestedManyWithoutCompanyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutCompanyInput_1.OrderCreateNestedManyWithoutCompanyInput)
], CompanyCreateWithoutCustomersInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutCompanyInput_1.ProductCreateNestedManyWithoutCompanyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutCompanyInput_1.ProductCreateNestedManyWithoutCompanyInput)
], CompanyCreateWithoutCustomersInput.prototype, "Product", void 0);
CompanyCreateWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyCreateWithoutCustomersInput", {
        isAbstract: true
    })
], CompanyCreateWithoutCustomersInput);
exports.CompanyCreateWithoutCustomersInput = CompanyCreateWithoutCustomersInput;
