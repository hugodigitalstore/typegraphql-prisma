"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueOrderDetailArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailWhereUniqueInput_1 = require("../../../inputs/OrderDetailWhereUniqueInput");
let FindUniqueOrderDetailArgs = class FindUniqueOrderDetailArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput)
], FindUniqueOrderDetailArgs.prototype, "where", void 0);
FindUniqueOrderDetailArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueOrderDetailArgs);
exports.FindUniqueOrderDetailArgs = FindUniqueOrderDetailArgs;
