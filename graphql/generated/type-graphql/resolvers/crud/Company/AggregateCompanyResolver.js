"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCompanyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const graphql_1 = require("graphql");
const AggregateCompanyArgs_1 = require("./args/AggregateCompanyArgs");
const Company_1 = require("../../../models/Company");
const AggregateCompany_1 = require("../../outputs/AggregateCompany");
const helpers_1 = require("../../../helpers");
let AggregateCompanyResolver = class AggregateCompanyResolver {
    async aggregateCompany(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).company.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCompany_1.AggregateCompany, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _a : Object, AggregateCompanyArgs_1.AggregateCompanyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCompanyResolver.prototype, "aggregateCompany", null);
AggregateCompanyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], AggregateCompanyResolver);
exports.AggregateCompanyResolver = AggregateCompanyResolver;
