"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Company_1 = require("../../../models/Company");
const Customer_1 = require("../../../models/Customer");
const Order_1 = require("../../../models/Order");
const CustomerOrdersArgs_1 = require("./args/CustomerOrdersArgs");
const helpers_1 = require("../../../helpers");
let CustomerRelationsResolver = class CustomerRelationsResolver {
    async orders(customer, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.findUnique({
            where: {
                id: customer.id,
            },
        }).orders(args);
    }
    async Company(customer, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.findUnique({
            where: {
                id: customer.id,
            },
        }).Company({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Order_1.Order], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customer_1.Customer, Object, CustomerOrdersArgs_1.CustomerOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerRelationsResolver.prototype, "orders", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Company_1.Company, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customer_1.Customer, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerRelationsResolver.prototype, "Company", null);
CustomerRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_1.Customer)
], CustomerRelationsResolver);
exports.CustomerRelationsResolver = CustomerRelationsResolver;
