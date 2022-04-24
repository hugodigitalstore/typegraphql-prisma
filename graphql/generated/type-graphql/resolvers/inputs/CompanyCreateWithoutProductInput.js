"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerCreateNestedManyWithoutCompanyInput_1 = require("../inputs/CustomerCreateNestedManyWithoutCompanyInput");
const OrderCreateNestedManyWithoutCompanyInput_1 = require("../inputs/OrderCreateNestedManyWithoutCompanyInput");
let CompanyCreateWithoutProductInput = class CompanyCreateWithoutProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CompanyCreateWithoutProductInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyCreateWithoutProductInput.prototype, "adress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCreateNestedManyWithoutCompanyInput_1.CustomerCreateNestedManyWithoutCompanyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerCreateNestedManyWithoutCompanyInput_1.CustomerCreateNestedManyWithoutCompanyInput)
], CompanyCreateWithoutProductInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutCompanyInput_1.OrderCreateNestedManyWithoutCompanyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutCompanyInput_1.OrderCreateNestedManyWithoutCompanyInput)
], CompanyCreateWithoutProductInput.prototype, "Order", void 0);
CompanyCreateWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyCreateWithoutProductInput", {
        isAbstract: true
    })
], CompanyCreateWithoutProductInput);
exports.CompanyCreateWithoutProductInput = CompanyCreateWithoutProductInput;
