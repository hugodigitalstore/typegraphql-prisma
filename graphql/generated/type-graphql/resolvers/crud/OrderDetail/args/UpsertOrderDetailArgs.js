"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOrderDetailArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailCreateInput_1 = require("../../../inputs/OrderDetailCreateInput");
const OrderDetailUpdateInput_1 = require("../../../inputs/OrderDetailUpdateInput");
const OrderDetailWhereUniqueInput_1 = require("../../../inputs/OrderDetailWhereUniqueInput");
let UpsertOrderDetailArgs = class UpsertOrderDetailArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput)
], UpsertOrderDetailArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailCreateInput_1.OrderDetailCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailCreateInput_1.OrderDetailCreateInput)
], UpsertOrderDetailArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailUpdateInput_1.OrderDetailUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailUpdateInput_1.OrderDetailUpdateInput)
], UpsertOrderDetailArgs.prototype, "update", void 0);
UpsertOrderDetailArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOrderDetailArgs);
exports.UpsertOrderDetailArgs = UpsertOrderDetailArgs;
