"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUpdateManyWithWhereWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerScalarWhereInput_1 = require("../inputs/CustomerScalarWhereInput");
const CustomerUpdateManyMutationInput_1 = require("../inputs/CustomerUpdateManyMutationInput");
let CustomerUpdateManyWithWhereWithoutCompanyInput = class CustomerUpdateManyWithWhereWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerScalarWhereInput_1.CustomerScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerScalarWhereInput_1.CustomerScalarWhereInput)
], CustomerUpdateManyWithWhereWithoutCompanyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerUpdateManyMutationInput_1.CustomerUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerUpdateManyMutationInput_1.CustomerUpdateManyMutationInput)
], CustomerUpdateManyWithWhereWithoutCompanyInput.prototype, "data", void 0);
CustomerUpdateManyWithWhereWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerUpdateManyWithWhereWithoutCompanyInput", {
        isAbstract: true
    })
], CustomerUpdateManyWithWhereWithoutCompanyInput);
exports.CustomerUpdateManyWithWhereWithoutCompanyInput = CustomerUpdateManyWithWhereWithoutCompanyInput;
