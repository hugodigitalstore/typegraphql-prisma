"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerCreateNestedManyWithoutCompanyInput_1 = require("../inputs/CustomerCreateNestedManyWithoutCompanyInput");
const ProductCreateNestedManyWithoutCompanyInput_1 = require("../inputs/ProductCreateNestedManyWithoutCompanyInput");
let CompanyCreateWithoutOrderInput = class CompanyCreateWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CompanyCreateWithoutOrderInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyCreateWithoutOrderInput.prototype, "adress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCreateNestedManyWithoutCompanyInput_1.CustomerCreateNestedManyWithoutCompanyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerCreateNestedManyWithoutCompanyInput_1.CustomerCreateNestedManyWithoutCompanyInput)
], CompanyCreateWithoutOrderInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutCompanyInput_1.ProductCreateNestedManyWithoutCompanyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutCompanyInput_1.ProductCreateNestedManyWithoutCompanyInput)
], CompanyCreateWithoutOrderInput.prototype, "Product", void 0);
CompanyCreateWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyCreateWithoutOrderInput", {
        isAbstract: true
    })
], CompanyCreateWithoutOrderInput);
exports.CompanyCreateWithoutOrderInput = CompanyCreateWithoutOrderInput;
