"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyUpdateOneRequiredWithoutOrderInput_1 = require("../inputs/CompanyUpdateOneRequiredWithoutOrderInput");
const CustomerUpdateOneRequiredWithoutOrdersInput_1 = require("../inputs/CustomerUpdateOneRequiredWithoutOrdersInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const OrderDetailUpdateManyWithoutOrderInput_1 = require("../inputs/OrderDetailUpdateManyWithoutOrderInput");
let OrderUpdateInput = class OrderUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], OrderUpdateInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerUpdateOneRequiredWithoutOrdersInput_1.CustomerUpdateOneRequiredWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerUpdateOneRequiredWithoutOrdersInput_1.CustomerUpdateOneRequiredWithoutOrdersInput)
], OrderUpdateInput.prototype, "customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyUpdateOneRequiredWithoutOrderInput_1.CompanyUpdateOneRequiredWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyUpdateOneRequiredWithoutOrderInput_1.CompanyUpdateOneRequiredWithoutOrderInput)
], OrderUpdateInput.prototype, "company", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailUpdateManyWithoutOrderInput_1.OrderDetailUpdateManyWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailUpdateManyWithoutOrderInput_1.OrderDetailUpdateManyWithoutOrderInput)
], OrderUpdateInput.prototype, "OrderDetail", void 0);
OrderUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateInput", {
        isAbstract: true
    })
], OrderUpdateInput);
exports.OrderUpdateInput = OrderUpdateInput;
