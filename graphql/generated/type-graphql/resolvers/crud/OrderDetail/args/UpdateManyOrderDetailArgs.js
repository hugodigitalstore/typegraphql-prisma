"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyOrderDetailArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailUpdateManyMutationInput_1 = require("../../../inputs/OrderDetailUpdateManyMutationInput");
const OrderDetailWhereInput_1 = require("../../../inputs/OrderDetailWhereInput");
let UpdateManyOrderDetailArgs = class UpdateManyOrderDetailArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailUpdateManyMutationInput_1.OrderDetailUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderDetailUpdateManyMutationInput_1.OrderDetailUpdateManyMutationInput)
], UpdateManyOrderDetailArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereInput_1.OrderDetailWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereInput_1.OrderDetailWhereInput)
], UpdateManyOrderDetailArgs.prototype, "where", void 0);
UpdateManyOrderDetailArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyOrderDetailArgs);
exports.UpdateManyOrderDetailArgs = UpdateManyOrderDetailArgs;
