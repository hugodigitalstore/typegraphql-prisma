"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyVerificationTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const graphql_1 = require("graphql");
const FindManyVerificationTokenArgs_1 = require("./args/FindManyVerificationTokenArgs");
const VerificationToken_1 = require("../../../models/VerificationToken");
const helpers_1 = require("../../../helpers");
let FindManyVerificationTokenResolver = class FindManyVerificationTokenResolver {
    async verificationTokens(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).verificationToken.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VerificationToken_1.VerificationToken], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _a : Object, FindManyVerificationTokenArgs_1.FindManyVerificationTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyVerificationTokenResolver.prototype, "verificationTokens", null);
FindManyVerificationTokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VerificationToken_1.VerificationToken)
], FindManyVerificationTokenResolver);
exports.FindManyVerificationTokenResolver = FindManyVerificationTokenResolver;
