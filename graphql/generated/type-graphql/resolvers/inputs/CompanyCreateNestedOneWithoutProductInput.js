"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateNestedOneWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateOrConnectWithoutProductInput_1 = require("../inputs/CompanyCreateOrConnectWithoutProductInput");
const CompanyCreateWithoutProductInput_1 = require("../inputs/CompanyCreateWithoutProductInput");
const CompanyWhereUniqueInput_1 = require("../inputs/CompanyWhereUniqueInput");
let CompanyCreateNestedOneWithoutProductInput = class CompanyCreateNestedOneWithoutProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateWithoutProductInput_1.CompanyCreateWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCreateWithoutProductInput_1.CompanyCreateWithoutProductInput)
], CompanyCreateNestedOneWithoutProductInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutProductInput_1.CompanyCreateOrConnectWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCreateOrConnectWithoutProductInput_1.CompanyCreateOrConnectWithoutProductInput)
], CompanyCreateNestedOneWithoutProductInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], CompanyCreateNestedOneWithoutProductInput.prototype, "connect", void 0);
CompanyCreateNestedOneWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyCreateNestedOneWithoutProductInput", {
        isAbstract: true
    })
], CompanyCreateNestedOneWithoutProductInput);
exports.CompanyCreateNestedOneWithoutProductInput = CompanyCreateNestedOneWithoutProductInput;
