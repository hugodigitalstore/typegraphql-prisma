"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOrderDetailResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const graphql_1 = require("graphql");
const AggregateOrderDetailArgs_1 = require("./args/AggregateOrderDetailArgs");
const OrderDetail_1 = require("../../../models/OrderDetail");
const AggregateOrderDetail_1 = require("../../outputs/AggregateOrderDetail");
const helpers_1 = require("../../../helpers");
let AggregateOrderDetailResolver = class AggregateOrderDetailResolver {
    async aggregateOrderDetail(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orderDetail.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateOrderDetail_1.AggregateOrderDetail, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _a : Object, AggregateOrderDetailArgs_1.AggregateOrderDetailArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateOrderDetailResolver.prototype, "aggregateOrderDetail", null);
AggregateOrderDetailResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderDetail_1.OrderDetail)
], AggregateOrderDetailResolver);
exports.AggregateOrderDetailResolver = AggregateOrderDetailResolver;
