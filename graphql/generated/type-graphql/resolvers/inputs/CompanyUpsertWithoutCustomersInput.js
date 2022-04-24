"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpsertWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateWithoutCustomersInput_1 = require("../inputs/CompanyCreateWithoutCustomersInput");
const CompanyUpdateWithoutCustomersInput_1 = require("../inputs/CompanyUpdateWithoutCustomersInput");
let CompanyUpsertWithoutCustomersInput = class CompanyUpsertWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpdateWithoutCustomersInput_1.CompanyUpdateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyUpdateWithoutCustomersInput_1.CompanyUpdateWithoutCustomersInput)
], CompanyUpsertWithoutCustomersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateWithoutCustomersInput_1.CompanyCreateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyCreateWithoutCustomersInput_1.CompanyCreateWithoutCustomersInput)
], CompanyUpsertWithoutCustomersInput.prototype, "create", void 0);
CompanyUpsertWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyUpsertWithoutCustomersInput", {
        isAbstract: true
    })
], CompanyUpsertWithoutCustomersInput);
exports.CompanyUpsertWithoutCustomersInput = CompanyUpsertWithoutCustomersInput;
