"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateWithoutCustomerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateNestedOneWithoutOrderInput_1 = require("../inputs/CompanyCreateNestedOneWithoutOrderInput");
const OrderDetailCreateNestedManyWithoutOrderInput_1 = require("../inputs/OrderDetailCreateNestedManyWithoutOrderInput");
let OrderCreateWithoutCustomerInput = class OrderCreateWithoutCustomerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderCreateWithoutCustomerInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateNestedOneWithoutOrderInput_1.CompanyCreateNestedOneWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyCreateNestedOneWithoutOrderInput_1.CompanyCreateNestedOneWithoutOrderInput)
], OrderCreateWithoutCustomerInput.prototype, "company", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailCreateNestedManyWithoutOrderInput_1.OrderDetailCreateNestedManyWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailCreateNestedManyWithoutOrderInput_1.OrderDetailCreateNestedManyWithoutOrderInput)
], OrderCreateWithoutCustomerInput.prototype, "OrderDetail", void 0);
OrderCreateWithoutCustomerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateWithoutCustomerInput", {
        isAbstract: true
    })
], OrderCreateWithoutCustomerInput);
exports.OrderCreateWithoutCustomerInput = OrderCreateWithoutCustomerInput;
