"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CustomerSumAggregate = class CustomerSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomerSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomerSumAggregate.prototype, "customerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomerSumAggregate.prototype, "companyId", void 0);
CustomerSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CustomerSumAggregate", {
        isAbstract: true
    })
], CustomerSumAggregate);
exports.CustomerSumAggregate = CustomerSumAggregate;
