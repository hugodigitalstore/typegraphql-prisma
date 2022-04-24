"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpsertWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateWithoutOrderInput_1 = require("../inputs/CompanyCreateWithoutOrderInput");
const CompanyUpdateWithoutOrderInput_1 = require("../inputs/CompanyUpdateWithoutOrderInput");
let CompanyUpsertWithoutOrderInput = class CompanyUpsertWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpdateWithoutOrderInput_1.CompanyUpdateWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyUpdateWithoutOrderInput_1.CompanyUpdateWithoutOrderInput)
], CompanyUpsertWithoutOrderInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateWithoutOrderInput_1.CompanyCreateWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyCreateWithoutOrderInput_1.CompanyCreateWithoutOrderInput)
], CompanyUpsertWithoutOrderInput.prototype, "create", void 0);
CompanyUpsertWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyUpsertWithoutOrderInput", {
        isAbstract: true
    })
], CompanyUpsertWithoutOrderInput);
exports.CompanyUpsertWithoutOrderInput = CompanyUpsertWithoutOrderInput;
