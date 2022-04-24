"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateManyCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductCreateManyCompanyInput = class ProductCreateManyCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateManyCompanyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateManyCompanyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateManyCompanyInput.prototype, "price", void 0);
ProductCreateManyCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateManyCompanyInput", {
        isAbstract: true
    })
], ProductCreateManyCompanyInput);
exports.ProductCreateManyCompanyInput = ProductCreateManyCompanyInput;
