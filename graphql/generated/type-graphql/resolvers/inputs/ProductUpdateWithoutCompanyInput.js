"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const OrderDetailUpdateManyWithoutProductInput_1 = require("../inputs/OrderDetailUpdateManyWithoutProductInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProductUpdateWithoutCompanyInput = class ProductUpdateWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutCompanyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutCompanyInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailUpdateManyWithoutProductInput_1.OrderDetailUpdateManyWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailUpdateManyWithoutProductInput_1.OrderDetailUpdateManyWithoutProductInput)
], ProductUpdateWithoutCompanyInput.prototype, "OrderDetail", void 0);
ProductUpdateWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithoutCompanyInput", {
        isAbstract: true
    })
], ProductUpdateWithoutCompanyInput);
exports.ProductUpdateWithoutCompanyInput = ProductUpdateWithoutCompanyInput;
