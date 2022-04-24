"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCreateOrConnectWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerCreateWithoutOrdersInput_1 = require("../inputs/CustomerCreateWithoutOrdersInput");
const CustomerWhereUniqueInput_1 = require("../inputs/CustomerWhereUniqueInput");
let CustomerCreateOrConnectWithoutOrdersInput = class CustomerCreateOrConnectWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereUniqueInput_1.CustomerWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerWhereUniqueInput_1.CustomerWhereUniqueInput)
], CustomerCreateOrConnectWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCreateWithoutOrdersInput_1.CustomerCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerCreateWithoutOrdersInput_1.CustomerCreateWithoutOrdersInput)
], CustomerCreateOrConnectWithoutOrdersInput.prototype, "create", void 0);
CustomerCreateOrConnectWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerCreateOrConnectWithoutOrdersInput", {
        isAbstract: true
    })
], CustomerCreateOrConnectWithoutOrdersInput);
exports.CustomerCreateOrConnectWithoutOrdersInput = CustomerCreateOrConnectWithoutOrdersInput;
