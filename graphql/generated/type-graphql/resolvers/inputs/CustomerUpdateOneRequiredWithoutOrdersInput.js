"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUpdateOneRequiredWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerCreateOrConnectWithoutOrdersInput_1 = require("../inputs/CustomerCreateOrConnectWithoutOrdersInput");
const CustomerCreateWithoutOrdersInput_1 = require("../inputs/CustomerCreateWithoutOrdersInput");
const CustomerUpdateWithoutOrdersInput_1 = require("../inputs/CustomerUpdateWithoutOrdersInput");
const CustomerUpsertWithoutOrdersInput_1 = require("../inputs/CustomerUpsertWithoutOrdersInput");
const CustomerWhereUniqueInput_1 = require("../inputs/CustomerWhereUniqueInput");
let CustomerUpdateOneRequiredWithoutOrdersInput = class CustomerUpdateOneRequiredWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCreateWithoutOrdersInput_1.CustomerCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerCreateWithoutOrdersInput_1.CustomerCreateWithoutOrdersInput)
], CustomerUpdateOneRequiredWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutOrdersInput_1.CustomerCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerCreateOrConnectWithoutOrdersInput_1.CustomerCreateOrConnectWithoutOrdersInput)
], CustomerUpdateOneRequiredWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerUpsertWithoutOrdersInput_1.CustomerUpsertWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerUpsertWithoutOrdersInput_1.CustomerUpsertWithoutOrdersInput)
], CustomerUpdateOneRequiredWithoutOrdersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereUniqueInput_1.CustomerWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerWhereUniqueInput_1.CustomerWhereUniqueInput)
], CustomerUpdateOneRequiredWithoutOrdersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerUpdateWithoutOrdersInput_1.CustomerUpdateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerUpdateWithoutOrdersInput_1.CustomerUpdateWithoutOrdersInput)
], CustomerUpdateOneRequiredWithoutOrdersInput.prototype, "update", void 0);
CustomerUpdateOneRequiredWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerUpdateOneRequiredWithoutOrdersInput", {
        isAbstract: true
    })
], CustomerUpdateOneRequiredWithoutOrdersInput);
exports.CustomerUpdateOneRequiredWithoutOrdersInput = CustomerUpdateOneRequiredWithoutOrdersInput;
