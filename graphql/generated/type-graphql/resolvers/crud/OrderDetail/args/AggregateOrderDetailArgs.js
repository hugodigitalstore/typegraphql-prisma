"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOrderDetailArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailOrderByWithRelationInput_1 = require("../../../inputs/OrderDetailOrderByWithRelationInput");
const OrderDetailWhereInput_1 = require("../../../inputs/OrderDetailWhereInput");
const OrderDetailWhereUniqueInput_1 = require("../../../inputs/OrderDetailWhereUniqueInput");
let AggregateOrderDetailArgs = class AggregateOrderDetailArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereInput_1.OrderDetailWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereInput_1.OrderDetailWhereInput)
], AggregateOrderDetailArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailOrderByWithRelationInput_1.OrderDetailOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateOrderDetailArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput)
], AggregateOrderDetailArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateOrderDetailArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateOrderDetailArgs.prototype, "skip", void 0);
AggregateOrderDetailArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateOrderDetailArgs);
exports.AggregateOrderDetailArgs = AggregateOrderDetailArgs;
