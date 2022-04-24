"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUpdateWithWhereUniqueWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerUpdateWithoutCompanyInput_1 = require("../inputs/CustomerUpdateWithoutCompanyInput");
const CustomerWhereUniqueInput_1 = require("../inputs/CustomerWhereUniqueInput");
let CustomerUpdateWithWhereUniqueWithoutCompanyInput = class CustomerUpdateWithWhereUniqueWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereUniqueInput_1.CustomerWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerWhereUniqueInput_1.CustomerWhereUniqueInput)
], CustomerUpdateWithWhereUniqueWithoutCompanyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerUpdateWithoutCompanyInput_1.CustomerUpdateWithoutCompanyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerUpdateWithoutCompanyInput_1.CustomerUpdateWithoutCompanyInput)
], CustomerUpdateWithWhereUniqueWithoutCompanyInput.prototype, "data", void 0);
CustomerUpdateWithWhereUniqueWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerUpdateWithWhereUniqueWithoutCompanyInput", {
        isAbstract: true
    })
], CustomerUpdateWithWhereUniqueWithoutCompanyInput);
exports.CustomerUpdateWithWhereUniqueWithoutCompanyInput = CustomerUpdateWithWhereUniqueWithoutCompanyInput;
