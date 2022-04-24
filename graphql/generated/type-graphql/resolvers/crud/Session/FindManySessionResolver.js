"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySessionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const graphql_1 = require("graphql");
const FindManySessionArgs_1 = require("./args/FindManySessionArgs");
const Session_1 = require("../../../models/Session");
const helpers_1 = require("../../../helpers");
let FindManySessionResolver = class FindManySessionResolver {
    async sessions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).session.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Session_1.Session], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _a : Object, FindManySessionArgs_1.FindManySessionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManySessionResolver.prototype, "sessions", null);
FindManySessionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Session_1.Session)
], FindManySessionResolver);
exports.FindManySessionResolver = FindManySessionResolver;
