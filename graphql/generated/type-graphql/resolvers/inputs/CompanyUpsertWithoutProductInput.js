"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpsertWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateWithoutProductInput_1 = require("../inputs/CompanyCreateWithoutProductInput");
const CompanyUpdateWithoutProductInput_1 = require("../inputs/CompanyUpdateWithoutProductInput");
let CompanyUpsertWithoutProductInput = class CompanyUpsertWithoutProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpdateWithoutProductInput_1.CompanyUpdateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyUpdateWithoutProductInput_1.CompanyUpdateWithoutProductInput)
], CompanyUpsertWithoutProductInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateWithoutProductInput_1.CompanyCreateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyCreateWithoutProductInput_1.CompanyCreateWithoutProductInput)
], CompanyUpsertWithoutProductInput.prototype, "create", void 0);
CompanyUpsertWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyUpsertWithoutProductInput", {
        isAbstract: true
    })
], CompanyUpsertWithoutProductInput);
exports.CompanyUpsertWithoutProductInput = CompanyUpsertWithoutProductInput;
