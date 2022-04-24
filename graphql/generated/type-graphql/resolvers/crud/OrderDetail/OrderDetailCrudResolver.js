"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const graphql_1 = require("graphql");
const AggregateOrderDetailArgs_1 = require("./args/AggregateOrderDetailArgs");
const CreateManyOrderDetailArgs_1 = require("./args/CreateManyOrderDetailArgs");
const CreateOrderDetailArgs_1 = require("./args/CreateOrderDetailArgs");
const DeleteManyOrderDetailArgs_1 = require("./args/DeleteManyOrderDetailArgs");
const DeleteOrderDetailArgs_1 = require("./args/DeleteOrderDetailArgs");
const FindFirstOrderDetailArgs_1 = require("./args/FindFirstOrderDetailArgs");
const FindManyOrderDetailArgs_1 = require("./args/FindManyOrderDetailArgs");
const FindUniqueOrderDetailArgs_1 = require("./args/FindUniqueOrderDetailArgs");
const GroupByOrderDetailArgs_1 = require("./args/GroupByOrderDetailArgs");
const UpdateManyOrderDetailArgs_1 = require("./args/UpdateManyOrderDetailArgs");
const UpdateOrderDetailArgs_1 = require("./args/UpdateOrderDetailArgs");
const UpsertOrderDetailArgs_1 = require("./args/UpsertOrderDetailArgs");
const helpers_1 = require("../../../helpers");
const OrderDetail_1 = require("../../../models/OrderDetail");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOrderDetail_1 = require("../../outputs/AggregateOrderDetail");
const OrderDetailGroupBy_1 = require("../../outputs/OrderDetailGroupBy");
let OrderDetailCrudResolver = class OrderDetailCrudResolver {
    async orderDetail(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderDetail.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstOrderDetail(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderDetail.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async orderDetails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderDetail.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOrderDetail(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderDetail.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyOrderDetail(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderDetail.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOrderDetail(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderDetail.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOrderDetail(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderDetail.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyOrderDetail(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderDetail.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyOrderDetail(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderDetail.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOrderDetail(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderDetail.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateOrderDetail(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orderDetail.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByOrderDetail(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderDetail.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => OrderDetail_1.OrderDetail, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _a : Object, FindUniqueOrderDetailArgs_1.FindUniqueOrderDetailArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailCrudResolver.prototype, "orderDetail", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => OrderDetail_1.OrderDetail, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_b = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _b : Object, FindFirstOrderDetailArgs_1.FindFirstOrderDetailArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailCrudResolver.prototype, "findFirstOrderDetail", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OrderDetail_1.OrderDetail], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_c = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _c : Object, FindManyOrderDetailArgs_1.FindManyOrderDetailArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailCrudResolver.prototype, "orderDetails", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OrderDetail_1.OrderDetail, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_d = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _d : Object, CreateOrderDetailArgs_1.CreateOrderDetailArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailCrudResolver.prototype, "createOrderDetail", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_e = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _e : Object, CreateManyOrderDetailArgs_1.CreateManyOrderDetailArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailCrudResolver.prototype, "createManyOrderDetail", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OrderDetail_1.OrderDetail, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_f = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _f : Object, DeleteOrderDetailArgs_1.DeleteOrderDetailArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailCrudResolver.prototype, "deleteOrderDetail", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OrderDetail_1.OrderDetail, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_g = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _g : Object, UpdateOrderDetailArgs_1.UpdateOrderDetailArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailCrudResolver.prototype, "updateOrderDetail", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_h = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _h : Object, DeleteManyOrderDetailArgs_1.DeleteManyOrderDetailArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailCrudResolver.prototype, "deleteManyOrderDetail", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_j = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _j : Object, UpdateManyOrderDetailArgs_1.UpdateManyOrderDetailArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailCrudResolver.prototype, "updateManyOrderDetail", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OrderDetail_1.OrderDetail, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_k = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _k : Object, UpsertOrderDetailArgs_1.UpsertOrderDetailArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailCrudResolver.prototype, "upsertOrderDetail", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateOrderDetail_1.AggregateOrderDetail, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_l = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _l : Object, AggregateOrderDetailArgs_1.AggregateOrderDetailArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailCrudResolver.prototype, "aggregateOrderDetail", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OrderDetailGroupBy_1.OrderDetailGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_m = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _m : Object, GroupByOrderDetailArgs_1.GroupByOrderDetailArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailCrudResolver.prototype, "groupByOrderDetail", null);
OrderDetailCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderDetail_1.OrderDetail)
], OrderDetailCrudResolver);
exports.OrderDetailCrudResolver = OrderDetailCrudResolver;
