"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutCompanyInput_1 = require("../inputs/ProductCreateWithoutCompanyInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutCompanyInput = class ProductCreateOrConnectWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutCompanyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutCompanyInput_1.ProductCreateWithoutCompanyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutCompanyInput_1.ProductCreateWithoutCompanyInput)
], ProductCreateOrConnectWithoutCompanyInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutCompanyInput", {
        isAbstract: true
    })
], ProductCreateOrConnectWithoutCompanyInput);
exports.ProductCreateOrConnectWithoutCompanyInput = ProductCreateOrConnectWithoutCompanyInput;
