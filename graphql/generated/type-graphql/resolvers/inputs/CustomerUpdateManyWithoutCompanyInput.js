"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUpdateManyWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerCreateManyCompanyInputEnvelope_1 = require("../inputs/CustomerCreateManyCompanyInputEnvelope");
const CustomerCreateOrConnectWithoutCompanyInput_1 = require("../inputs/CustomerCreateOrConnectWithoutCompanyInput");
const CustomerCreateWithoutCompanyInput_1 = require("../inputs/CustomerCreateWithoutCompanyInput");
const CustomerScalarWhereInput_1 = require("../inputs/CustomerScalarWhereInput");
const CustomerUpdateManyWithWhereWithoutCompanyInput_1 = require("../inputs/CustomerUpdateManyWithWhereWithoutCompanyInput");
const CustomerUpdateWithWhereUniqueWithoutCompanyInput_1 = require("../inputs/CustomerUpdateWithWhereUniqueWithoutCompanyInput");
const CustomerUpsertWithWhereUniqueWithoutCompanyInput_1 = require("../inputs/CustomerUpsertWithWhereUniqueWithoutCompanyInput");
const CustomerWhereUniqueInput_1 = require("../inputs/CustomerWhereUniqueInput");
let CustomerUpdateManyWithoutCompanyInput = class CustomerUpdateManyWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerCreateWithoutCompanyInput_1.CustomerCreateWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomerUpdateManyWithoutCompanyInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerCreateOrConnectWithoutCompanyInput_1.CustomerCreateOrConnectWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomerUpdateManyWithoutCompanyInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerUpsertWithWhereUniqueWithoutCompanyInput_1.CustomerUpsertWithWhereUniqueWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomerUpdateManyWithoutCompanyInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCreateManyCompanyInputEnvelope_1.CustomerCreateManyCompanyInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerCreateManyCompanyInputEnvelope_1.CustomerCreateManyCompanyInputEnvelope)
], CustomerUpdateManyWithoutCompanyInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerWhereUniqueInput_1.CustomerWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomerUpdateManyWithoutCompanyInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerWhereUniqueInput_1.CustomerWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomerUpdateManyWithoutCompanyInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerWhereUniqueInput_1.CustomerWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomerUpdateManyWithoutCompanyInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerWhereUniqueInput_1.CustomerWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomerUpdateManyWithoutCompanyInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerUpdateWithWhereUniqueWithoutCompanyInput_1.CustomerUpdateWithWhereUniqueWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomerUpdateManyWithoutCompanyInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerUpdateManyWithWhereWithoutCompanyInput_1.CustomerUpdateManyWithWhereWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomerUpdateManyWithoutCompanyInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerScalarWhereInput_1.CustomerScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomerUpdateManyWithoutCompanyInput.prototype, "deleteMany", void 0);
CustomerUpdateManyWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerUpdateManyWithoutCompanyInput", {
        isAbstract: true
    })
], CustomerUpdateManyWithoutCompanyInput);
exports.CustomerUpdateManyWithoutCompanyInput = CustomerUpdateManyWithoutCompanyInput;
