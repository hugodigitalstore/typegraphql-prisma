"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderDetailArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailWhereUniqueInput_1 = require("../../../inputs/OrderDetailWhereUniqueInput");
let DeleteOrderDetailArgs = class DeleteOrderDetailArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput)
], DeleteOrderDetailArgs.prototype, "where", void 0);
DeleteOrderDetailArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOrderDetailArgs);
exports.DeleteOrderDetailArgs = DeleteOrderDetailArgs;
