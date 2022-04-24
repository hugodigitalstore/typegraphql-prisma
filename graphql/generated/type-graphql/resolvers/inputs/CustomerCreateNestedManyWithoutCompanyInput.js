"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCreateNestedManyWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerCreateManyCompanyInputEnvelope_1 = require("../inputs/CustomerCreateManyCompanyInputEnvelope");
const CustomerCreateOrConnectWithoutCompanyInput_1 = require("../inputs/CustomerCreateOrConnectWithoutCompanyInput");
const CustomerCreateWithoutCompanyInput_1 = require("../inputs/CustomerCreateWithoutCompanyInput");
const CustomerWhereUniqueInput_1 = require("../inputs/CustomerWhereUniqueInput");
let CustomerCreateNestedManyWithoutCompanyInput = class CustomerCreateNestedManyWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerCreateWithoutCompanyInput_1.CustomerCreateWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomerCreateNestedManyWithoutCompanyInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerCreateOrConnectWithoutCompanyInput_1.CustomerCreateOrConnectWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomerCreateNestedManyWithoutCompanyInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCreateManyCompanyInputEnvelope_1.CustomerCreateManyCompanyInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerCreateManyCompanyInputEnvelope_1.CustomerCreateManyCompanyInputEnvelope)
], CustomerCreateNestedManyWithoutCompanyInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerWhereUniqueInput_1.CustomerWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomerCreateNestedManyWithoutCompanyInput.prototype, "connect", void 0);
CustomerCreateNestedManyWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerCreateNestedManyWithoutCompanyInput", {
        isAbstract: true
    })
], CustomerCreateNestedManyWithoutCompanyInput);
exports.CustomerCreateNestedManyWithoutCompanyInput = CustomerCreateNestedManyWithoutCompanyInput;
