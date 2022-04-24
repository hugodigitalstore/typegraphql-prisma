"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateManyCompanyInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyCompanyInput_1 = require("../inputs/ProductCreateManyCompanyInput");
let ProductCreateManyCompanyInputEnvelope = class ProductCreateManyCompanyInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateManyCompanyInput_1.ProductCreateManyCompanyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateManyCompanyInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ProductCreateManyCompanyInputEnvelope.prototype, "skipDuplicates", void 0);
ProductCreateManyCompanyInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateManyCompanyInputEnvelope", {
        isAbstract: true
    })
], ProductCreateManyCompanyInputEnvelope);
exports.ProductCreateManyCompanyInputEnvelope = ProductCreateManyCompanyInputEnvelope;
