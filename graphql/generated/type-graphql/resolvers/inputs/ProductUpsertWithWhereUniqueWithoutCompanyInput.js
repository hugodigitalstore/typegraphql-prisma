"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithWhereUniqueWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutCompanyInput_1 = require("../inputs/ProductCreateWithoutCompanyInput");
const ProductUpdateWithoutCompanyInput_1 = require("../inputs/ProductUpdateWithoutCompanyInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpsertWithWhereUniqueWithoutCompanyInput = class ProductUpsertWithWhereUniqueWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutCompanyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutCompanyInput_1.ProductUpdateWithoutCompanyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutCompanyInput_1.ProductUpdateWithoutCompanyInput)
], ProductUpsertWithWhereUniqueWithoutCompanyInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutCompanyInput_1.ProductCreateWithoutCompanyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutCompanyInput_1.ProductCreateWithoutCompanyInput)
], ProductUpsertWithWhereUniqueWithoutCompanyInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutCompanyInput", {
        isAbstract: true
    })
], ProductUpsertWithWhereUniqueWithoutCompanyInput);
exports.ProductUpsertWithWhereUniqueWithoutCompanyInput = ProductUpsertWithWhereUniqueWithoutCompanyInput;
