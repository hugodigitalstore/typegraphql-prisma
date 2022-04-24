"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedOneWithoutOrderDetailInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutOrderDetailInput_1 = require("../inputs/ProductCreateOrConnectWithoutOrderDetailInput");
const ProductCreateWithoutOrderDetailInput_1 = require("../inputs/ProductCreateWithoutOrderDetailInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedOneWithoutOrderDetailInput = class ProductCreateNestedOneWithoutOrderDetailInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutOrderDetailInput_1.ProductCreateWithoutOrderDetailInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutOrderDetailInput_1.ProductCreateWithoutOrderDetailInput)
], ProductCreateNestedOneWithoutOrderDetailInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutOrderDetailInput_1.ProductCreateOrConnectWithoutOrderDetailInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateOrConnectWithoutOrderDetailInput_1.ProductCreateOrConnectWithoutOrderDetailInput)
], ProductCreateNestedOneWithoutOrderDetailInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateNestedOneWithoutOrderDetailInput.prototype, "connect", void 0);
ProductCreateNestedOneWithoutOrderDetailInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateNestedOneWithoutOrderDetailInput", {
        isAbstract: true
    })
], ProductCreateNestedOneWithoutOrderDetailInput);
exports.ProductCreateNestedOneWithoutOrderDetailInput = ProductCreateNestedOneWithoutOrderDetailInput;
