"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerCreateNestedOneWithoutOrdersInput_1 = require("../inputs/CustomerCreateNestedOneWithoutOrdersInput");
const OrderDetailCreateNestedManyWithoutOrderInput_1 = require("../inputs/OrderDetailCreateNestedManyWithoutOrderInput");
let OrderCreateWithoutCompanyInput = class OrderCreateWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderCreateWithoutCompanyInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutOrdersInput_1.CustomerCreateNestedOneWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerCreateNestedOneWithoutOrdersInput_1.CustomerCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutCompanyInput.prototype, "customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailCreateNestedManyWithoutOrderInput_1.OrderDetailCreateNestedManyWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailCreateNestedManyWithoutOrderInput_1.OrderDetailCreateNestedManyWithoutOrderInput)
], OrderCreateWithoutCompanyInput.prototype, "OrderDetail", void 0);
OrderCreateWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateWithoutCompanyInput", {
        isAbstract: true
    })
], OrderCreateWithoutCompanyInput);
exports.OrderCreateWithoutCompanyInput = OrderCreateWithoutCompanyInput;
