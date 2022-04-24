"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Company_1 = require("../../../models/Company");
const Customer_1 = require("../../../models/Customer");
const Order_1 = require("../../../models/Order");
const Product_1 = require("../../../models/Product");
const CompanyCustomersArgs_1 = require("./args/CompanyCustomersArgs");
const CompanyOrderArgs_1 = require("./args/CompanyOrderArgs");
const CompanyProductArgs_1 = require("./args/CompanyProductArgs");
const helpers_1 = require("../../../helpers");
let CompanyRelationsResolver = class CompanyRelationsResolver {
    async customers(company, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).company.findUnique({
            where: {
                id: company.id,
            },
        }).customers(args);
    }
    async Order(company, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).company.findUnique({
            where: {
                id: company.id,
            },
        }).Order(args);
    }
    async Product(company, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).company.findUnique({
            where: {
                id: company.id,
            },
        }).Product(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Customer_1.Customer], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Company_1.Company, Object, CompanyCustomersArgs_1.CompanyCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyRelationsResolver.prototype, "customers", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Order_1.Order], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Company_1.Company, Object, CompanyOrderArgs_1.CompanyOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyRelationsResolver.prototype, "Order", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Product_1.Product], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Company_1.Company, Object, CompanyProductArgs_1.CompanyProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CompanyRelationsResolver.prototype, "Product", null);
CompanyRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], CompanyRelationsResolver);
exports.CompanyRelationsResolver = CompanyRelationsResolver;
