"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpdateOneWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateOrConnectWithoutCustomersInput_1 = require("../inputs/CompanyCreateOrConnectWithoutCustomersInput");
const CompanyCreateWithoutCustomersInput_1 = require("../inputs/CompanyCreateWithoutCustomersInput");
const CompanyUpdateWithoutCustomersInput_1 = require("../inputs/CompanyUpdateWithoutCustomersInput");
const CompanyUpsertWithoutCustomersInput_1 = require("../inputs/CompanyUpsertWithoutCustomersInput");
const CompanyWhereUniqueInput_1 = require("../inputs/CompanyWhereUniqueInput");
let CompanyUpdateOneWithoutCustomersInput = class CompanyUpdateOneWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateWithoutCustomersInput_1.CompanyCreateWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCreateWithoutCustomersInput_1.CompanyCreateWithoutCustomersInput)
], CompanyUpdateOneWithoutCustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutCustomersInput_1.CompanyCreateOrConnectWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCreateOrConnectWithoutCustomersInput_1.CompanyCreateOrConnectWithoutCustomersInput)
], CompanyUpdateOneWithoutCustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpsertWithoutCustomersInput_1.CompanyUpsertWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyUpsertWithoutCustomersInput_1.CompanyUpsertWithoutCustomersInput)
], CompanyUpdateOneWithoutCustomersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CompanyUpdateOneWithoutCustomersInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CompanyUpdateOneWithoutCustomersInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], CompanyUpdateOneWithoutCustomersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpdateWithoutCustomersInput_1.CompanyUpdateWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyUpdateWithoutCustomersInput_1.CompanyUpdateWithoutCustomersInput)
], CompanyUpdateOneWithoutCustomersInput.prototype, "update", void 0);
CompanyUpdateOneWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyUpdateOneWithoutCustomersInput", {
        isAbstract: true
    })
], CompanyUpdateOneWithoutCustomersInput);
exports.CompanyUpdateOneWithoutCustomersInput = CompanyUpdateOneWithoutCustomersInput;
