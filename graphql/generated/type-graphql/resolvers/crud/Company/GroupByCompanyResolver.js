"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCompanyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const graphql_1 = require("graphql");
const GroupByCompanyArgs_1 = require("./args/GroupByCompanyArgs");
const Company_1 = require("../../../models/Company");
const CompanyGroupBy_1 = require("../../outputs/CompanyGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCompanyResolver = class GroupByCompanyResolver {
    async groupByCompany(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).company.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CompanyGroupBy_1.CompanyGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _a : Object, GroupByCompanyArgs_1.GroupByCompanyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCompanyResolver.prototype, "groupByCompany", null);
GroupByCompanyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], GroupByCompanyResolver);
exports.GroupByCompanyResolver = GroupByCompanyResolver;
