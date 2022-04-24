"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithoutOrderDetailInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyUpdateOneRequiredWithoutOrderInput_1 = require("../inputs/CompanyUpdateOneRequiredWithoutOrderInput");
const CustomerUpdateOneRequiredWithoutOrdersInput_1 = require("../inputs/CustomerUpdateOneRequiredWithoutOrdersInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
let OrderUpdateWithoutOrderDetailInput = class OrderUpdateWithoutOrderDetailInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], OrderUpdateWithoutOrderDetailInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerUpdateOneRequiredWithoutOrdersInput_1.CustomerUpdateOneRequiredWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerUpdateOneRequiredWithoutOrdersInput_1.CustomerUpdateOneRequiredWithoutOrdersInput)
], OrderUpdateWithoutOrderDetailInput.prototype, "customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpdateOneRequiredWithoutOrderInput_1.CompanyUpdateOneRequiredWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyUpdateOneRequiredWithoutOrderInput_1.CompanyUpdateOneRequiredWithoutOrderInput)
], OrderUpdateWithoutOrderDetailInput.prototype, "company", void 0);
OrderUpdateWithoutOrderDetailInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithoutOrderDetailInput", {
        isAbstract: true
    })
], OrderUpdateWithoutOrderDetailInput);
exports.OrderUpdateWithoutOrderDetailInput = OrderUpdateWithoutOrderDetailInput;
