"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCreateWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateNestedOneWithoutCustomersInput_1 = require("../inputs/CompanyCreateNestedOneWithoutCustomersInput");
let CustomerCreateWithoutOrdersInput = class CustomerCreateWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomerCreateWithoutOrdersInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerCreateWithoutOrdersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CustomerCreateWithoutOrdersInput.prototype, "customerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateNestedOneWithoutCustomersInput_1.CompanyCreateNestedOneWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCreateNestedOneWithoutCustomersInput_1.CompanyCreateNestedOneWithoutCustomersInput)
], CustomerCreateWithoutOrdersInput.prototype, "Company", void 0);
CustomerCreateWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerCreateWithoutOrdersInput", {
        isAbstract: true
    })
], CustomerCreateWithoutOrdersInput);
exports.CustomerCreateWithoutOrdersInput = CustomerCreateWithoutOrdersInput;
