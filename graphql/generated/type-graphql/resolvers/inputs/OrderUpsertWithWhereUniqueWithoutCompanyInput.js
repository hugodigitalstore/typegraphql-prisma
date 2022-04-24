"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpsertWithWhereUniqueWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutCompanyInput_1 = require("../inputs/OrderCreateWithoutCompanyInput");
const OrderUpdateWithoutCompanyInput_1 = require("../inputs/OrderUpdateWithoutCompanyInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpsertWithWhereUniqueWithoutCompanyInput = class OrderUpsertWithWhereUniqueWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpsertWithWhereUniqueWithoutCompanyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutCompanyInput_1.OrderUpdateWithoutCompanyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutCompanyInput_1.OrderUpdateWithoutCompanyInput)
], OrderUpsertWithWhereUniqueWithoutCompanyInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutCompanyInput_1.OrderCreateWithoutCompanyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutCompanyInput_1.OrderCreateWithoutCompanyInput)
], OrderUpsertWithWhereUniqueWithoutCompanyInput.prototype, "create", void 0);
OrderUpsertWithWhereUniqueWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutCompanyInput", {
        isAbstract: true
    })
], OrderUpsertWithWhereUniqueWithoutCompanyInput);
exports.OrderUpsertWithWhereUniqueWithoutCompanyInput = OrderUpsertWithWhereUniqueWithoutCompanyInput;
