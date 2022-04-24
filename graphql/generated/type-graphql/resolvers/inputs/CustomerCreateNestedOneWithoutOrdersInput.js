"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCreateNestedOneWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerCreateOrConnectWithoutOrdersInput_1 = require("../inputs/CustomerCreateOrConnectWithoutOrdersInput");
const CustomerCreateWithoutOrdersInput_1 = require("../inputs/CustomerCreateWithoutOrdersInput");
const CustomerWhereUniqueInput_1 = require("../inputs/CustomerWhereUniqueInput");
let CustomerCreateNestedOneWithoutOrdersInput = class CustomerCreateNestedOneWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCreateWithoutOrdersInput_1.CustomerCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerCreateWithoutOrdersInput_1.CustomerCreateWithoutOrdersInput)
], CustomerCreateNestedOneWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutOrdersInput_1.CustomerCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerCreateOrConnectWithoutOrdersInput_1.CustomerCreateOrConnectWithoutOrdersInput)
], CustomerCreateNestedOneWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereUniqueInput_1.CustomerWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerWhereUniqueInput_1.CustomerWhereUniqueInput)
], CustomerCreateNestedOneWithoutOrdersInput.prototype, "connect", void 0);
CustomerCreateNestedOneWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerCreateNestedOneWithoutOrdersInput", {
        isAbstract: true
    })
], CustomerCreateNestedOneWithoutOrdersInput);
exports.CustomerCreateNestedOneWithoutOrdersInput = CustomerCreateNestedOneWithoutOrdersInput;
