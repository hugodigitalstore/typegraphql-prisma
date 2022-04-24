"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutOrderDetailInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutOrderDetailInput_1 = require("../inputs/ProductCreateWithoutOrderDetailInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutOrderDetailInput = class ProductCreateOrConnectWithoutOrderDetailInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutOrderDetailInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutOrderDetailInput_1.ProductCreateWithoutOrderDetailInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutOrderDetailInput_1.ProductCreateWithoutOrderDetailInput)
], ProductCreateOrConnectWithoutOrderDetailInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutOrderDetailInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutOrderDetailInput", {
        isAbstract: true
    })
], ProductCreateOrConnectWithoutOrderDetailInput);
exports.ProductCreateOrConnectWithoutOrderDetailInput = ProductCreateOrConnectWithoutOrderDetailInput;
