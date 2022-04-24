"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyOrderDetailArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailOrderByWithRelationInput_1 = require("../../../inputs/OrderDetailOrderByWithRelationInput");
const OrderDetailWhereInput_1 = require("../../../inputs/OrderDetailWhereInput");
const OrderDetailWhereUniqueInput_1 = require("../../../inputs/OrderDetailWhereUniqueInput");
const OrderDetailScalarFieldEnum_1 = require("../../../../enums/OrderDetailScalarFieldEnum");
let FindManyOrderDetailArgs = class FindManyOrderDetailArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereInput_1.OrderDetailWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereInput_1.OrderDetailWhereInput)
], FindManyOrderDetailArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailOrderByWithRelationInput_1.OrderDetailOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyOrderDetailArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderDetailWhereUniqueInput_1.OrderDetailWhereUniqueInput)
], FindManyOrderDetailArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyOrderDetailArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyOrderDetailArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailScalarFieldEnum_1.OrderDetailScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyOrderDetailArgs.prototype, "distinct", void 0);
FindManyOrderDetailArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyOrderDetailArgs);
exports.FindManyOrderDetailArgs = FindManyOrderDetailArgs;
