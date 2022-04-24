"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderDetailArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailUpdateInput_1 = require("../../../inputs/OrderDetailUpdateInput");
const OrderDetailWhereUniqueInput_1 = require("../../../inputs/OrderDetailWhereUniqueInput");
let UpdateOrderDetailArgs = class UpdateOrderDetailArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailUpdateInput_1.OrderDetailUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailUpdateInput_1.OrderDetailUpdateInput)
], UpdateOrderDetailArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput)
], UpdateOrderDetailArgs.prototype, "where", void 0);
UpdateOrderDetailArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOrderDetailArgs);
exports.UpdateOrderDetailArgs = UpdateOrderDetailArgs;
