"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const graphql_1 = require("graphql");
const CreateProductArgs_1 = require("./args/CreateProductArgs");
const Product_1 = require("../../../models/Product");
const helpers_1 = require("../../../helpers");
let CreateProductResolver = class CreateProductResolver {
    async createProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_1.Product, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _a : Object, CreateProductArgs_1.CreateProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateProductResolver.prototype, "createProduct", null);
CreateProductResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], CreateProductResolver);
exports.CreateProductResolver = CreateProductResolver;
