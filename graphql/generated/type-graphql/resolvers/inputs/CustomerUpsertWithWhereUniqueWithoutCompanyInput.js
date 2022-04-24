"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUpsertWithWhereUniqueWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerCreateWithoutCompanyInput_1 = require("../inputs/CustomerCreateWithoutCompanyInput");
const CustomerUpdateWithoutCompanyInput_1 = require("../inputs/CustomerUpdateWithoutCompanyInput");
const CustomerWhereUniqueInput_1 = require("../inputs/CustomerWhereUniqueInput");
let CustomerUpsertWithWhereUniqueWithoutCompanyInput = class CustomerUpsertWithWhereUniqueWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereUniqueInput_1.CustomerWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerWhereUniqueInput_1.CustomerWhereUniqueInput)
], CustomerUpsertWithWhereUniqueWithoutCompanyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerUpdateWithoutCompanyInput_1.CustomerUpdateWithoutCompanyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerUpdateWithoutCompanyInput_1.CustomerUpdateWithoutCompanyInput)
], CustomerUpsertWithWhereUniqueWithoutCompanyInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCreateWithoutCompanyInput_1.CustomerCreateWithoutCompanyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerCreateWithoutCompanyInput_1.CustomerCreateWithoutCompanyInput)
], CustomerUpsertWithWhereUniqueWithoutCompanyInput.prototype, "create", void 0);
CustomerUpsertWithWhereUniqueWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerUpsertWithWhereUniqueWithoutCompanyInput", {
        isAbstract: true
    })
], CustomerUpsertWithWhereUniqueWithoutCompanyInput);
exports.CustomerUpsertWithWhereUniqueWithoutCompanyInput = CustomerUpsertWithWhereUniqueWithoutCompanyInput;
