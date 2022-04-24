"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateOrConnectWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateWithoutOrderInput_1 = require("../inputs/CompanyCreateWithoutOrderInput");
const CompanyWhereUniqueInput_1 = require("../inputs/CompanyWhereUniqueInput");
let CompanyCreateOrConnectWithoutOrderInput = class CompanyCreateOrConnectWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], CompanyCreateOrConnectWithoutOrderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateWithoutOrderInput_1.CompanyCreateWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyCreateWithoutOrderInput_1.CompanyCreateWithoutOrderInput)
], CompanyCreateOrConnectWithoutOrderInput.prototype, "create", void 0);
CompanyCreateOrConnectWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyCreateOrConnectWithoutOrderInput", {
        isAbstract: true
    })
], CompanyCreateOrConnectWithoutOrderInput);
exports.CompanyCreateOrConnectWithoutOrderInput = CompanyCreateOrConnectWithoutOrderInput;
