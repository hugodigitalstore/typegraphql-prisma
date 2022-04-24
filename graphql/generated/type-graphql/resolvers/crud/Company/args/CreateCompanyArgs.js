"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompanyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateInput_1 = require("../../../inputs/CompanyCreateInput");
let CreateCompanyArgs = class CreateCompanyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateInput_1.CompanyCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyCreateInput_1.CompanyCreateInput)
], CreateCompanyArgs.prototype, "data", void 0);
CreateCompanyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCompanyArgs);
exports.CreateCompanyArgs = CreateCompanyArgs;
