"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUpdateWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyUpdateOneWithoutCustomersInput_1 = require("../inputs/CompanyUpdateOneWithoutCustomersInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CustomerUpdateWithoutOrdersInput = class CustomerUpdateWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CustomerUpdateWithoutOrdersInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CustomerUpdateWithoutOrdersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], CustomerUpdateWithoutOrdersInput.prototype, "customerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpdateOneWithoutCustomersInput_1.CompanyUpdateOneWithoutCustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyUpdateOneWithoutCustomersInput_1.CompanyUpdateOneWithoutCustomersInput)
], CustomerUpdateWithoutOrdersInput.prototype, "Company", void 0);
CustomerUpdateWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerUpdateWithoutOrdersInput", {
        isAbstract: true
    })
], CustomerUpdateWithoutOrdersInput);
exports.CustomerUpdateWithoutOrdersInput = CustomerUpdateWithoutOrdersInput;
