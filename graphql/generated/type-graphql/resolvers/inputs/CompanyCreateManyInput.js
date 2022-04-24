"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CompanyCreateManyInput = class CompanyCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CompanyCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyCreateManyInput.prototype, "adress", void 0);
CompanyCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyCreateManyInput", {
        isAbstract: true
    })
], CompanyCreateManyInput);
exports.CompanyCreateManyInput = CompanyCreateManyInput;
