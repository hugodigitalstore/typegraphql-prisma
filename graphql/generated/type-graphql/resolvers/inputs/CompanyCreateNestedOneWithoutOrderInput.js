"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCreateNestedOneWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateOrConnectWithoutOrderInput_1 = require("../inputs/CompanyCreateOrConnectWithoutOrderInput");
const CompanyCreateWithoutOrderInput_1 = require("../inputs/CompanyCreateWithoutOrderInput");
const CompanyWhereUniqueInput_1 = require("../inputs/CompanyWhereUniqueInput");
let CompanyCreateNestedOneWithoutOrderInput = class CompanyCreateNestedOneWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateWithoutOrderInput_1.CompanyCreateWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCreateWithoutOrderInput_1.CompanyCreateWithoutOrderInput)
], CompanyCreateNestedOneWithoutOrderInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutOrderInput_1.CompanyCreateOrConnectWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCreateOrConnectWithoutOrderInput_1.CompanyCreateOrConnectWithoutOrderInput)
], CompanyCreateNestedOneWithoutOrderInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], CompanyCreateNestedOneWithoutOrderInput.prototype, "connect", void 0);
CompanyCreateNestedOneWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyCreateNestedOneWithoutOrderInput", {
        isAbstract: true
    })
], CompanyCreateNestedOneWithoutOrderInput);
exports.CompanyCreateNestedOneWithoutOrderInput = CompanyCreateNestedOneWithoutOrderInput;
