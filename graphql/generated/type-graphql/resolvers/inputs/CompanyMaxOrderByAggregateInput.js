"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CompanyMaxOrderByAggregateInput = class CompanyMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyMaxOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyMaxOrderByAggregateInput.prototype, "adress", void 0);
CompanyMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyMaxOrderByAggregateInput", {
        isAbstract: true
    })
], CompanyMaxOrderByAggregateInput);
exports.CompanyMaxOrderByAggregateInput = CompanyMaxOrderByAggregateInput;
