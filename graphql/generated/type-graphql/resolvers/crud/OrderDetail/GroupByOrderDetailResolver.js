"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOrderDetailResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const graphql_1 = require("graphql");
const GroupByOrderDetailArgs_1 = require("./args/GroupByOrderDetailArgs");
const OrderDetail_1 = require("../../../models/OrderDetail");
const OrderDetailGroupBy_1 = require("../../outputs/OrderDetailGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByOrderDetailResolver = class GroupByOrderDetailResolver {
    async groupByOrderDetail(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderDetail.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OrderDetailGroupBy_1.OrderDetailGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _a : Object, GroupByOrderDetailArgs_1.GroupByOrderDetailArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByOrderDetailResolver.prototype, "groupByOrderDetail", null);
GroupByOrderDetailResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderDetail_1.OrderDetail)
], GroupByOrderDetailResolver);
exports.GroupByOrderDetailResolver = GroupByOrderDetailResolver;
