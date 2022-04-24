"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Company_1 = require("../../../models/Company");
const Customer_1 = require("../../../models/Customer");
const Order_1 = require("../../../models/Order");
const OrderDetail_1 = require("../../../models/OrderDetail");
const OrderOrderDetailArgs_1 = require("./args/OrderOrderDetailArgs");
const helpers_1 = require("../../../helpers");
let OrderRelationsResolver = class OrderRelationsResolver {
    async customer(order, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findUnique({
            where: {
                id: order.id,
            },
        }).customer({});
    }
    async company(order, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findUnique({
            where: {
                id: order.id,
            },
        }).company({});
    }
    async OrderDetail(order, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findUnique({
            where: {
                id: order.id,
            },
        }).OrderDetail(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Customer_1.Customer, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Order_1.Order, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "customer", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Company_1.Company, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Order_1.Order, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "company", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [OrderDetail_1.OrderDetail], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Order_1.Order, Object, OrderOrderDetailArgs_1.OrderOrderDetailArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "OrderDetail", null);
OrderRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Order_1.Order)
], OrderRelationsResolver);
exports.OrderRelationsResolver = OrderRelationsResolver;
