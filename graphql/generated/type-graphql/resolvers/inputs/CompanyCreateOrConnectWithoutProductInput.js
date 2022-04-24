"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateOrConnectWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateWithoutProductInput_1 = require("../inputs/CompanyCreateWithoutProductInput");
const CompanyWhereUniqueInput_1 = require("../inputs/CompanyWhereUniqueInput");
let CompanyCreateOrConnectWithoutProductInput = class CompanyCreateOrConnectWithoutProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], CompanyCreateOrConnectWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateWithoutProductInput_1.CompanyCreateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyCreateWithoutProductInput_1.CompanyCreateWithoutProductInput)
], CompanyCreateOrConnectWithoutProductInput.prototype, "create", void 0);
CompanyCreateOrConnectWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyCreateOrConnectWithoutProductInput", {
        isAbstract: true
    })
], CompanyCreateOrConnectWithoutProductInput);
exports.CompanyCreateOrConnectWithoutProductInput = CompanyCreateOrConnectWithoutProductInput;
