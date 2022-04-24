"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyCompanyInputEnvelope_1 = require("../inputs/ProductCreateManyCompanyInputEnvelope");
const ProductCreateOrConnectWithoutCompanyInput_1 = require("../inputs/ProductCreateOrConnectWithoutCompanyInput");
const ProductCreateWithoutCompanyInput_1 = require("../inputs/ProductCreateWithoutCompanyInput");
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyWithWhereWithoutCompanyInput_1 = require("../inputs/ProductUpdateManyWithWhereWithoutCompanyInput");
const ProductUpdateWithWhereUniqueWithoutCompanyInput_1 = require("../inputs/ProductUpdateWithWhereUniqueWithoutCompanyInput");
const ProductUpsertWithWhereUniqueWithoutCompanyInput_1 = require("../inputs/ProductUpsertWithWhereUniqueWithoutCompanyInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateManyWithoutCompanyInput = class ProductUpdateManyWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutCompanyInput_1.ProductCreateWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCompanyInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutCompanyInput_1.ProductCreateOrConnectWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCompanyInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutCompanyInput_1.ProductUpsertWithWhereUniqueWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCompanyInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateManyCompanyInputEnvelope_1.ProductCreateManyCompanyInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateManyCompanyInputEnvelope_1.ProductCreateManyCompanyInputEnvelope)
], ProductUpdateManyWithoutCompanyInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCompanyInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCompanyInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCompanyInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCompanyInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutCompanyInput_1.ProductUpdateWithWhereUniqueWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCompanyInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutCompanyInput_1.ProductUpdateManyWithWhereWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCompanyInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductScalarWhereInput_1.ProductScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCompanyInput.prototype, "deleteMany", void 0);
ProductUpdateManyWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateManyWithoutCompanyInput", {
        isAbstract: true
    })
], ProductUpdateManyWithoutCompanyInput);
exports.ProductUpdateManyWithoutCompanyInput = ProductUpdateManyWithoutCompanyInput;
