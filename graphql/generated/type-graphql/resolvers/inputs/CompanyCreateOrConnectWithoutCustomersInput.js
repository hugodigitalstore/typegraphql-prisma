"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateOrConnectWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateWithoutCustomersInput_1 = require("../inputs/CompanyCreateWithoutCustomersInput");
const CompanyWhereUniqueInput_1 = require("../inputs/CompanyWhereUniqueInput");
let CompanyCreateOrConnectWithoutCustomersInput = class CompanyCreateOrConnectWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], CompanyCreateOrConnectWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateWithoutCustomersInput_1.CompanyCreateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyCreateWithoutCustomersInput_1.CompanyCreateWithoutCustomersInput)
], CompanyCreateOrConnectWithoutCustomersInput.prototype, "create", void 0);
CompanyCreateOrConnectWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyCreateOrConnectWithoutCustomersInput", {
        isAbstract: true
    })
], CompanyCreateOrConnectWithoutCustomersInput);
exports.CompanyCreateOrConnectWithoutCustomersInput = CompanyCreateOrConnectWithoutCustomersInput;
