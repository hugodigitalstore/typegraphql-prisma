"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpdateWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerUpdateManyWithoutCompanyInput_1 = require("../inputs/CustomerUpdateManyWithoutCompanyInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProductUpdateManyWithoutCompanyInput_1 = require("../inputs/ProductUpdateManyWithoutCompanyInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CompanyUpdateWithoutOrderInput = class CompanyUpdateWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateWithoutOrderInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CompanyUpdateWithoutOrderInput.prototype, "adress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerUpdateManyWithoutCompanyInput_1.CustomerUpdateManyWithoutCompanyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerUpdateManyWithoutCompanyInput_1.CustomerUpdateManyWithoutCompanyInput)
], CompanyUpdateWithoutOrderInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutCompanyInput_1.ProductUpdateManyWithoutCompanyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutCompanyInput_1.ProductUpdateManyWithoutCompanyInput)
], CompanyUpdateWithoutOrderInput.prototype, "Product", void 0);
CompanyUpdateWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyUpdateWithoutOrderInput", {
        isAbstract: true
    })
], CompanyUpdateWithoutOrderInput);
exports.CompanyUpdateWithoutOrderInput = CompanyUpdateWithoutOrderInput;
