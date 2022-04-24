"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerUpdateManyWithoutCompanyInput_1 = require("../inputs/CustomerUpdateManyWithoutCompanyInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OrderUpdateManyWithoutCompanyInput_1 = require("../inputs/OrderUpdateManyWithoutCompanyInput");
const ProductUpdateManyWithoutCompanyInput_1 = require("../inputs/ProductUpdateManyWithoutCompanyInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CompanyUpdateInput = class CompanyUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CompanyUpdateInput.prototype, "adress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerUpdateManyWithoutCompanyInput_1.CustomerUpdateManyWithoutCompanyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerUpdateManyWithoutCompanyInput_1.CustomerUpdateManyWithoutCompanyInput)
], CompanyUpdateInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateManyWithoutCompanyInput_1.OrderUpdateManyWithoutCompanyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateManyWithoutCompanyInput_1.OrderUpdateManyWithoutCompanyInput)
], CompanyUpdateInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutCompanyInput_1.ProductUpdateManyWithoutCompanyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutCompanyInput_1.ProductUpdateManyWithoutCompanyInput)
], CompanyUpdateInput.prototype, "Product", void 0);
CompanyUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyUpdateInput", {
        isAbstract: true
    })
], CompanyUpdateInput);
exports.CompanyUpdateInput = CompanyUpdateInput;
