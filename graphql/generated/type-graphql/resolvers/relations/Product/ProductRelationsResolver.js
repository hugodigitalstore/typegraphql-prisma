"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Company_1 = require("../../../models/Company");
const OrderDetail_1 = require("../../../models/OrderDetail");
const Product_1 = require("../../../models/Product");
const ProductOrderDetailArgs_1 = require("./args/ProductOrderDetailArgs");
const helpers_1 = require("../../../helpers");
let ProductRelationsResolver = class ProductRelationsResolver {
    async company(product, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            where: {
                id: product.id,
            },
        }).company({});
    }
    async OrderDetail(product, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            where: {
                id: product.id,
            },
        }).OrderDetail(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Company_1.Company, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.Product, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "company", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [OrderDetail_1.OrderDetail], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.Product, Object, ProductOrderDetailArgs_1.ProductOrderDetailArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "OrderDetail", null);
ProductRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], ProductRelationsResolver);
exports.ProductRelationsResolver = ProductRelationsResolver;
