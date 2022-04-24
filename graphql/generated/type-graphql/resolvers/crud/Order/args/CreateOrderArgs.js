"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateInput_1 = require("../../../inputs/OrderCreateInput");
let CreateOrderArgs = class CreateOrderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateInput_1.OrderCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateInput_1.OrderCreateInput)
], CreateOrderArgs.prototype, "data", void 0);
CreateOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOrderArgs);
exports.CreateOrderArgs = CreateOrderArgs;
