"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpdateOneRequiredWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateOrConnectWithoutOrderInput_1 = require("../inputs/CompanyCreateOrConnectWithoutOrderInput");
const CompanyCreateWithoutOrderInput_1 = require("../inputs/CompanyCreateWithoutOrderInput");
const CompanyUpdateWithoutOrderInput_1 = require("../inputs/CompanyUpdateWithoutOrderInput");
const CompanyUpsertWithoutOrderInput_1 = require("../inputs/CompanyUpsertWithoutOrderInput");
const CompanyWhereUniqueInput_1 = require("../inputs/CompanyWhereUniqueInput");
let CompanyUpdateOneRequiredWithoutOrderInput = class CompanyUpdateOneRequiredWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateWithoutOrderInput_1.CompanyCreateWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCreateWithoutOrderInput_1.CompanyCreateWithoutOrderInput)
], CompanyUpdateOneRequiredWithoutOrderInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutOrderInput_1.CompanyCreateOrConnectWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCreateOrConnectWithoutOrderInput_1.CompanyCreateOrConnectWithoutOrderInput)
], CompanyUpdateOneRequiredWithoutOrderInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpsertWithoutOrderInput_1.CompanyUpsertWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyUpsertWithoutOrderInput_1.CompanyUpsertWithoutOrderInput)
], CompanyUpdateOneRequiredWithoutOrderInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], CompanyUpdateOneRequiredWithoutOrderInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpdateWithoutOrderInput_1.CompanyUpdateWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyUpdateWithoutOrderInput_1.CompanyUpdateWithoutOrderInput)
], CompanyUpdateOneRequiredWithoutOrderInput.prototype, "update", void 0);
CompanyUpdateOneRequiredWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyUpdateOneRequiredWithoutOrderInput", {
        isAbstract: true
    })
], CompanyUpdateOneRequiredWithoutOrderInput);
exports.CompanyUpdateOneRequiredWithoutOrderInput = CompanyUpdateOneRequiredWithoutOrderInput;
