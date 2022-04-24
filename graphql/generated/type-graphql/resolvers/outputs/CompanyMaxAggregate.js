"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CompanyMaxAggregate = class CompanyMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyMaxAggregate.prototype, "adress", void 0);
CompanyMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CompanyMaxAggregate", {
        isAbstract: true
    })
], CompanyMaxAggregate);
exports.CompanyMaxAggregate = CompanyMaxAggregate;
