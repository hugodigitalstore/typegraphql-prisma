"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedManyWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyCompanyInputEnvelope_1 = require("../inputs/ProductCreateManyCompanyInputEnvelope");
const ProductCreateOrConnectWithoutCompanyInput_1 = require("../inputs/ProductCreateOrConnectWithoutCompanyInput");
const ProductCreateWithoutCompanyInput_1 = require("../inputs/ProductCreateWithoutCompanyInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedManyWithoutCompanyInput = class ProductCreateNestedManyWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutCompanyInput_1.ProductCreateWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutCompanyInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutCompanyInput_1.ProductCreateOrConnectWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutCompanyInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateManyCompanyInputEnvelope_1.ProductCreateManyCompanyInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateManyCompanyInputEnvelope_1.ProductCreateManyCompanyInputEnvelope)
], ProductCreateNestedManyWithoutCompanyInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutCompanyInput.prototype, "connect", void 0);
ProductCreateNestedManyWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateNestedManyWithoutCompanyInput", {
        isAbstract: true
    })
], ProductCreateNestedManyWithoutCompanyInput);
exports.ProductCreateNestedManyWithoutCompanyInput = ProductCreateNestedManyWithoutCompanyInput;
