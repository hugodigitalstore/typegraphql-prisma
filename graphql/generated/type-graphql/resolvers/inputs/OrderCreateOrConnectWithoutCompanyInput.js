"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateOrConnectWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutCompanyInput_1 = require("../inputs/OrderCreateWithoutCompanyInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateOrConnectWithoutCompanyInput = class OrderCreateOrConnectWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutCompanyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutCompanyInput_1.OrderCreateWithoutCompanyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutCompanyInput_1.OrderCreateWithoutCompanyInput)
], OrderCreateOrConnectWithoutCompanyInput.prototype, "create", void 0);
OrderCreateOrConnectWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateOrConnectWithoutCompanyInput", {
        isAbstract: true
    })
], OrderCreateOrConnectWithoutCompanyInput);
exports.OrderCreateOrConnectWithoutCompanyInput = OrderCreateOrConnectWithoutCompanyInput;
