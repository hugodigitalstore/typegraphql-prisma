"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCreateNestedOneWithoutOrderInput_1 = require("../inputs/CompanyCreateNestedOneWithoutOrderInput");
const CustomerCreateNestedOneWithoutOrdersInput_1 = require("../inputs/CustomerCreateNestedOneWithoutOrdersInput");
const OrderDetailCreateNestedManyWithoutOrderInput_1 = require("../inputs/OrderDetailCreateNestedManyWithoutOrderInput");
let OrderCreateInput = class OrderCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderCreateInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutOrdersInput_1.CustomerCreateNestedOneWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomerCreateNestedOneWithoutOrdersInput_1.CustomerCreateNestedOneWithoutOrdersInput)
], OrderCreateInput.prototype, "customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCreateNestedOneWithoutOrderInput_1.CompanyCreateNestedOneWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CompanyCreateNestedOneWithoutOrderInput_1.CompanyCreateNestedOneWithoutOrderInput)
], OrderCreateInput.prototype, "company", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailCreateNestedManyWithoutOrderInput_1.OrderDetailCreateNestedManyWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailCreateNestedManyWithoutOrderInput_1.OrderDetailCreateNestedManyWithoutOrderInput)
], OrderCreateInput.prototype, "OrderDetail", void 0);
OrderCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateInput", {
        isAbstract: true
    })
], OrderCreateInput);
exports.OrderCreateInput = OrderCreateInput;
