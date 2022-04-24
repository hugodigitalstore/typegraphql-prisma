"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyUpdateOneRequiredWithoutProductInput_1 = require("../inputs/CompanyUpdateOneRequiredWithoutProductInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const OrderDetailUpdateManyWithoutProductInput_1 = require("../inputs/OrderDetailUpdateManyWithoutProductInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProductUpdateInput = class ProductUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpdateOneRequiredWithoutProductInput_1.CompanyUpdateOneRequiredWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyUpdateOneRequiredWithoutProductInput_1.CompanyUpdateOneRequiredWithoutProductInput)
], ProductUpdateInput.prototype, "company", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailUpdateManyWithoutProductInput_1.OrderDetailUpdateManyWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailUpdateManyWithoutProductInput_1.OrderDetailUpdateManyWithoutProductInput)
], ProductUpdateInput.prototype, "OrderDetail", void 0);
ProductUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateInput", {
        isAbstract: true
    })
], ProductUpdateInput);
exports.ProductUpdateInput = ProductUpdateInput;
