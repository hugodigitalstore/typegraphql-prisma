"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const graphql_1 = require("graphql");
const FindFirstAccountArgs_1 = require("./args/FindFirstAccountArgs");
const Account_1 = require("../../../models/Account");
const helpers_1 = require("../../../helpers");
let FindFirstAccountResolver = class FindFirstAccountResolver {
    async findFirstAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).account.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Account_1.Account, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _a : Object, FindFirstAccountArgs_1.FindFirstAccountArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstAccountResolver.prototype, "findFirstAccount", null);
FindFirstAccountResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Account_1.Account)
], FindFirstAccountResolver);
exports.FindFirstAccountResolver = FindFirstAccountResolver;
