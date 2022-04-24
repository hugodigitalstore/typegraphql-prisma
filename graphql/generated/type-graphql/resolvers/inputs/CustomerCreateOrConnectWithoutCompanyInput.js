"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCreateOrConnectWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerCreateWithoutCompanyInput_1 = require("../inputs/CustomerCreateWithoutCompanyInput");
const CustomerWhereUniqueInput_1 = require("../inputs/CustomerWhereUniqueInput");
let CustomerCreateOrConnectWithoutCompanyInput = class CustomerCreateOrConnectWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereUniqueInput_1.CustomerWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerWhereUniqueInput_1.CustomerWhereUniqueInput)
], CustomerCreateOrConnectWithoutCompanyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCreateWithoutCompanyInput_1.CustomerCreateWithoutCompanyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerCreateWithoutCompanyInput_1.CustomerCreateWithoutCompanyInput)
], CustomerCreateOrConnectWithoutCompanyInput.prototype, "create", void 0);
CustomerCreateOrConnectWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerCreateOrConnectWithoutCompanyInput", {
        isAbstract: true
    })
], CustomerCreateOrConnectWithoutCompanyInput);
exports.CustomerCreateOrConnectWithoutCompanyInput = CustomerCreateOrConnectWithoutCompanyInput;
