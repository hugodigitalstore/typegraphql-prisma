"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithWhereUniqueWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderUpdateWithoutCompanyInput_1 = require("../inputs/OrderUpdateWithoutCompanyInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateWithWhereUniqueWithoutCompanyInput = class OrderUpdateWithWhereUniqueWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpdateWithWhereUniqueWithoutCompanyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutCompanyInput_1.OrderUpdateWithoutCompanyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutCompanyInput_1.OrderUpdateWithoutCompanyInput)
], OrderUpdateWithWhereUniqueWithoutCompanyInput.prototype, "data", void 0);
OrderUpdateWithWhereUniqueWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutCompanyInput", {
        isAbstract: true
    })
], OrderUpdateWithWhereUniqueWithoutCompanyInput);
exports.OrderUpdateWithWhereUniqueWithoutCompanyInput = OrderUpdateWithWhereUniqueWithoutCompanyInput;
