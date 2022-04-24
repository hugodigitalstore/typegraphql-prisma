"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyOrderDetailArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailWhereInput_1 = require("../../../inputs/OrderDetailWhereInput");
let DeleteManyOrderDetailArgs = class DeleteManyOrderDetailArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereInput_1.OrderDetailWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereInput_1.OrderDetailWhereInput)
], DeleteManyOrderDetailArgs.prototype, "where", void 0);
DeleteManyOrderDetailArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyOrderDetailArgs);
exports.DeleteManyOrderDetailArgs = DeleteManyOrderDetailArgs;
