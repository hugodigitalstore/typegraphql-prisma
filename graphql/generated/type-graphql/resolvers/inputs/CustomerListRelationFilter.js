"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerWhereInput_1 = require("../inputs/CustomerWhereInput");
let CustomerListRelationFilter = class CustomerListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereInput_1.CustomerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerWhereInput_1.CustomerWhereInput)
], CustomerListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereInput_1.CustomerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerWhereInput_1.CustomerWhereInput)
], CustomerListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereInput_1.CustomerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerWhereInput_1.CustomerWhereInput)
], CustomerListRelationFilter.prototype, "none", void 0);
CustomerListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerListRelationFilter", {
        isAbstract: true
    })
], CustomerListRelationFilter);
exports.CustomerListRelationFilter = CustomerListRelationFilter;
