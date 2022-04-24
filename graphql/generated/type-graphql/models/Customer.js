"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerCount_1 = require("../resolvers/outputs/CustomerCount");
let Customer = class Customer {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "customerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "companyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCount_1.CustomerCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerCount_1.CustomerCount)
], Customer.prototype, "_count", void 0);
Customer = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Customer", {
        isAbstract: true
    })
], Customer);
exports.Customer = Customer;
