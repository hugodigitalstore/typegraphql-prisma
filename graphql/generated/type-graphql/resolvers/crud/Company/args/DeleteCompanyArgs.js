"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCompanyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyWhereUniqueInput_1 = require("../../../inputs/CompanyWhereUniqueInput");
let DeleteCompanyArgs = class DeleteCompanyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], DeleteCompanyArgs.prototype, "where", void 0);
DeleteCompanyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteCompanyArgs);
exports.DeleteCompanyArgs = DeleteCompanyArgs;
