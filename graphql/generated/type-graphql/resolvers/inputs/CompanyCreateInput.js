"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerCreateNestedManyWithoutCompanyInput_1 = require("../inputs/CustomerCreateNestedManyWithoutCompanyInput");
const OrderCreateNestedManyWithoutCompanyInput_1 = require("../inputs/OrderCreateNestedManyWithoutCompanyInput");
const ProductCreateNestedManyWithoutCompanyInput_1 = require("../inputs/ProductCreateNestedManyWithoutCompanyInput");
let CompanyCreateInput = class CompanyCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CompanyCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyCreateInput.prototype, "adress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCreateNestedManyWithoutCompanyInput_1.CustomerCreateNestedManyWithoutCompanyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerCreateNestedManyWithoutCompanyInput_1.CustomerCreateNestedManyWithoutCompanyInput)
], CompanyCreateInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutCompanyInput_1.OrderCreateNestedManyWithoutCompanyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutCompanyInput_1.OrderCreateNestedManyWithoutCompanyInput)
], CompanyCreateInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutCompanyInput_1.ProductCreateNestedManyWithoutCompanyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutCompanyInput_1.ProductCreateNestedManyWithoutCompanyInput)
], CompanyCreateInput.prototype, "Product", void 0);
CompanyCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyCreateInput", {
        isAbstract: true
    })
], CompanyCreateInput);
exports.CompanyCreateInput = CompanyCreateInput;
