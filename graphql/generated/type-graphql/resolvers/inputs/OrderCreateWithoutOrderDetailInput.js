"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateWithoutOrderDetailInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateNestedOneWithoutOrderInput_1 = require("../inputs/CompanyCreateNestedOneWithoutOrderInput");
const CustomerCreateNestedOneWithoutOrdersInput_1 = require("../inputs/CustomerCreateNestedOneWithoutOrdersInput");
let OrderCreateWithoutOrderDetailInput = class OrderCreateWithoutOrderDetailInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderCreateWithoutOrderDetailInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutOrdersInput_1.CustomerCreateNestedOneWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerCreateNestedOneWithoutOrdersInput_1.CustomerCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutOrderDetailInput.prototype, "customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateNestedOneWithoutOrderInput_1.CompanyCreateNestedOneWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyCreateNestedOneWithoutOrderInput_1.CompanyCreateNestedOneWithoutOrderInput)
], OrderCreateWithoutOrderDetailInput.prototype, "company", void 0);
OrderCreateWithoutOrderDetailInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateWithoutOrderDetailInput", {
        isAbstract: true
    })
], OrderCreateWithoutOrderDetailInput);
exports.OrderCreateWithoutOrderDetailInput = OrderCreateWithoutOrderDetailInput;
