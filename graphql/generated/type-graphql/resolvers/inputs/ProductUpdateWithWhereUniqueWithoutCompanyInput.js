"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithWhereUniqueWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateWithoutCompanyInput_1 = require("../inputs/ProductUpdateWithoutCompanyInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateWithWhereUniqueWithoutCompanyInput = class ProductUpdateWithWhereUniqueWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutCompanyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutCompanyInput_1.ProductUpdateWithoutCompanyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutCompanyInput_1.ProductUpdateWithoutCompanyInput)
], ProductUpdateWithWhereUniqueWithoutCompanyInput.prototype, "data", void 0);
ProductUpdateWithWhereUniqueWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutCompanyInput", {
        isAbstract: true
    })
], ProductUpdateWithWhereUniqueWithoutCompanyInput);
exports.ProductUpdateWithWhereUniqueWithoutCompanyInput = ProductUpdateWithWhereUniqueWithoutCompanyInput;
