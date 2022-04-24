"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCreateWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateNestedManyWithoutCustomerInput_1 = require("../inputs/OrderCreateNestedManyWithoutCustomerInput");
let CustomerCreateWithoutCompanyInput = class CustomerCreateWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomerCreateWithoutCompanyInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerCreateWithoutCompanyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutCustomerInput_1.OrderCreateNestedManyWithoutCustomerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutCustomerInput_1.OrderCreateNestedManyWithoutCustomerInput)
], CustomerCreateWithoutCompanyInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CustomerCreateWithoutCompanyInput.prototype, "customerId", void 0);
CustomerCreateWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerCreateWithoutCompanyInput", {
        isAbstract: true
    })
], CustomerCreateWithoutCompanyInput);
exports.CustomerCreateWithoutCompanyInput = CustomerCreateWithoutCompanyInput;
