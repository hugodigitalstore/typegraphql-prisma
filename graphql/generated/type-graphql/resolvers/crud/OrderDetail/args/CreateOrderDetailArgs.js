"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderDetailArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailCreateInput_1 = require("../../../inputs/OrderDetailCreateInput");
let CreateOrderDetailArgs = class CreateOrderDetailArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailCreateInput_1.OrderDetailCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailCreateInput_1.OrderDetailCreateInput)
], CreateOrderDetailArgs.prototype, "data", void 0);
CreateOrderDetailArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOrderDetailArgs);
exports.CreateOrderDetailArgs = CreateOrderDetailArgs;
