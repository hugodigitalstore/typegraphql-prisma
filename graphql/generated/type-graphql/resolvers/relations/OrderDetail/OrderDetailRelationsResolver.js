"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Order_1 = require("../../../models/Order");
const OrderDetail_1 = require("../../../models/OrderDetail");
const Product_1 = require("../../../models/Product");
const helpers_1 = require("../../../helpers");
let OrderDetailRelationsResolver = class OrderDetailRelationsResolver {
    async order(orderDetail, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orderDetail.findUnique({
            where: {
                id: orderDetail.id,
            },
        }).order({});
    }
    async product(orderDetail, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orderDetail.findUnique({
            where: {
                id: orderDetail.id,
            },
        }).product({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Order_1.Order, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [OrderDetail_1.OrderDetail, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailRelationsResolver.prototype, "order", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Product_1.Product, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [OrderDetail_1.OrderDetail, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderDetailRelationsResolver.prototype, "product", null);
OrderDetailRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderDetail_1.OrderDetail)
], OrderDetailRelationsResolver);
exports.OrderDetailRelationsResolver = OrderDetailRelationsResolver;
