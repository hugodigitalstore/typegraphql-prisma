"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateNestedOneWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateOrConnectWithoutCustomersInput_1 = require("../inputs/CompanyCreateOrConnectWithoutCustomersInput");
const CompanyCreateWithoutCustomersInput_1 = require("../inputs/CompanyCreateWithoutCustomersInput");
const CompanyWhereUniqueInput_1 = require("../inputs/CompanyWhereUniqueInput");
let CompanyCreateNestedOneWithoutCustomersInput = class CompanyCreateNestedOneWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateWithoutCustomersInput_1.CompanyCreateWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCreateWithoutCustomersInput_1.CompanyCreateWithoutCustomersInput)
], CompanyCreateNestedOneWithoutCustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutCustomersInput_1.CompanyCreateOrConnectWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCreateOrConnectWithoutCustomersInput_1.CompanyCreateOrConnectWithoutCustomersInput)
], CompanyCreateNestedOneWithoutCustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], CompanyCreateNestedOneWithoutCustomersInput.prototype, "connect", void 0);
CompanyCreateNestedOneWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyCreateNestedOneWithoutCustomersInput", {
        isAbstract: true
    })
], CompanyCreateNestedOneWithoutCustomersInput);
exports.CompanyCreateNestedOneWithoutCustomersInput = CompanyCreateNestedOneWithoutCustomersInput;
