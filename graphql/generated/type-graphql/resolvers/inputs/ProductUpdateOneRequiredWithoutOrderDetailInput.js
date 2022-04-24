"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateOneRequiredWithoutOrderDetailInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutOrderDetailInput_1 = require("../inputs/ProductCreateOrConnectWithoutOrderDetailInput");
const ProductCreateWithoutOrderDetailInput_1 = require("../inputs/ProductCreateWithoutOrderDetailInput");
const ProductUpdateWithoutOrderDetailInput_1 = require("../inputs/ProductUpdateWithoutOrderDetailInput");
const ProductUpsertWithoutOrderDetailInput_1 = require("../inputs/ProductUpsertWithoutOrderDetailInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateOneRequiredWithoutOrderDetailInput = class ProductUpdateOneRequiredWithoutOrderDetailInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutOrderDetailInput_1.ProductCreateWithoutOrderDetailInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutOrderDetailInput_1.ProductCreateWithoutOrderDetailInput)
], ProductUpdateOneRequiredWithoutOrderDetailInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutOrderDetailInput_1.ProductCreateOrConnectWithoutOrderDetailInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateOrConnectWithoutOrderDetailInput_1.ProductCreateOrConnectWithoutOrderDetailInput)
], ProductUpdateOneRequiredWithoutOrderDetailInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpsertWithoutOrderDetailInput_1.ProductUpsertWithoutOrderDetailInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpsertWithoutOrderDetailInput_1.ProductUpsertWithoutOrderDetailInput)
], ProductUpdateOneRequiredWithoutOrderDetailInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateOneRequiredWithoutOrderDetailInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutOrderDetailInput_1.ProductUpdateWithoutOrderDetailInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutOrderDetailInput_1.ProductUpdateWithoutOrderDetailInput)
], ProductUpdateOneRequiredWithoutOrderDetailInput.prototype, "update", void 0);
ProductUpdateOneRequiredWithoutOrderDetailInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutOrderDetailInput", {
        isAbstract: true
    })
], ProductUpdateOneRequiredWithoutOrderDetailInput);
exports.ProductUpdateOneRequiredWithoutOrderDetailInput = ProductUpdateOneRequiredWithoutOrderDetailInput;
