"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpdateOneRequiredWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateOrConnectWithoutProductInput_1 = require("../inputs/CompanyCreateOrConnectWithoutProductInput");
const CompanyCreateWithoutProductInput_1 = require("../inputs/CompanyCreateWithoutProductInput");
const CompanyUpdateWithoutProductInput_1 = require("../inputs/CompanyUpdateWithoutProductInput");
const CompanyUpsertWithoutProductInput_1 = require("../inputs/CompanyUpsertWithoutProductInput");
const CompanyWhereUniqueInput_1 = require("../inputs/CompanyWhereUniqueInput");
let CompanyUpdateOneRequiredWithoutProductInput = class CompanyUpdateOneRequiredWithoutProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateWithoutProductInput_1.CompanyCreateWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCreateWithoutProductInput_1.CompanyCreateWithoutProductInput)
], CompanyUpdateOneRequiredWithoutProductInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutProductInput_1.CompanyCreateOrConnectWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCreateOrConnectWithoutProductInput_1.CompanyCreateOrConnectWithoutProductInput)
], CompanyUpdateOneRequiredWithoutProductInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpsertWithoutProductInput_1.CompanyUpsertWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyUpsertWithoutProductInput_1.CompanyUpsertWithoutProductInput)
], CompanyUpdateOneRequiredWithoutProductInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], CompanyUpdateOneRequiredWithoutProductInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpdateWithoutProductInput_1.CompanyUpdateWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyUpdateWithoutProductInput_1.CompanyUpdateWithoutProductInput)
], CompanyUpdateOneRequiredWithoutProductInput.prototype, "update", void 0);
CompanyUpdateOneRequiredWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyUpdateOneRequiredWithoutProductInput", {
        isAbstract: true
    })
], CompanyUpdateOneRequiredWithoutProductInput);
exports.CompanyUpdateOneRequiredWithoutProductInput = CompanyUpdateOneRequiredWithoutProductInput;
