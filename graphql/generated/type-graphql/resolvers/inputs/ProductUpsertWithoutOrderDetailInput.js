"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithoutOrderDetailInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutOrderDetailInput_1 = require("../inputs/ProductCreateWithoutOrderDetailInput");
const ProductUpdateWithoutOrderDetailInput_1 = require("../inputs/ProductUpdateWithoutOrderDetailInput");
let ProductUpsertWithoutOrderDetailInput = class ProductUpsertWithoutOrderDetailInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutOrderDetailInput_1.ProductUpdateWithoutOrderDetailInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutOrderDetailInput_1.ProductUpdateWithoutOrderDetailInput)
], ProductUpsertWithoutOrderDetailInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutOrderDetailInput_1.ProductCreateWithoutOrderDetailInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutOrderDetailInput_1.ProductCreateWithoutOrderDetailInput)
], ProductUpsertWithoutOrderDetailInput.prototype, "create", void 0);
ProductUpsertWithoutOrderDetailInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithoutOrderDetailInput", {
        isAbstract: true
    })
], ProductUpsertWithoutOrderDetailInput);
exports.ProductUpsertWithoutOrderDetailInput = ProductUpsertWithoutOrderDetailInput;
