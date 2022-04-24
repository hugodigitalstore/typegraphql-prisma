"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithoutOrderDetailInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyUpdateOneRequiredWithoutProductInput_1 = require("../inputs/CompanyUpdateOneRequiredWithoutProductInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProductUpdateWithoutOrderDetailInput = class ProductUpdateWithoutOrderDetailInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutOrderDetailInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutOrderDetailInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpdateOneRequiredWithoutProductInput_1.CompanyUpdateOneRequiredWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyUpdateOneRequiredWithoutProductInput_1.CompanyUpdateOneRequiredWithoutProductInput)
], ProductUpdateWithoutOrderDetailInput.prototype, "company", void 0);
ProductUpdateWithoutOrderDetailInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithoutOrderDetailInput", {
        isAbstract: true
    })
], ProductUpdateWithoutOrderDetailInput);
exports.ProductUpdateWithoutOrderDetailInput = ProductUpdateWithoutOrderDetailInput;
