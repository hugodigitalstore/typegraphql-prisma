"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUpsertWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerCreateWithoutOrdersInput_1 = require("../inputs/CustomerCreateWithoutOrdersInput");
const CustomerUpdateWithoutOrdersInput_1 = require("../inputs/CustomerUpdateWithoutOrdersInput");
let CustomerUpsertWithoutOrdersInput = class CustomerUpsertWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerUpdateWithoutOrdersInput_1.CustomerUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerUpdateWithoutOrdersInput_1.CustomerUpdateWithoutOrdersInput)
], CustomerUpsertWithoutOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCreateWithoutOrdersInput_1.CustomerCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerCreateWithoutOrdersInput_1.CustomerCreateWithoutOrdersInput)
], CustomerUpsertWithoutOrdersInput.prototype, "create", void 0);
CustomerUpsertWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerUpsertWithoutOrdersInput", {
        isAbstract: true
    })
], CustomerUpsertWithoutOrdersInput);
exports.CustomerUpsertWithoutOrdersInput = CustomerUpsertWithoutOrdersInput;
