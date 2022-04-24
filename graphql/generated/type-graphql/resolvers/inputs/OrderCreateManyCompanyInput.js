"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateManyCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderCreateManyCompanyInput = class OrderCreateManyCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderCreateManyCompanyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderCreateManyCompanyInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OrderCreateManyCompanyInput.prototype, "customerId", void 0);
OrderCreateManyCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateManyCompanyInput", {
        isAbstract: true
    })
], OrderCreateManyCompanyInput);
exports.OrderCreateManyCompanyInput = OrderCreateManyCompanyInput;
