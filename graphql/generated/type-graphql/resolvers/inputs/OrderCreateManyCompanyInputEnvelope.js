"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateManyCompanyInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyCompanyInput_1 = require("../inputs/OrderCreateManyCompanyInput");
let OrderCreateManyCompanyInputEnvelope = class OrderCreateManyCompanyInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateManyCompanyInput_1.OrderCreateManyCompanyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateManyCompanyInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrderCreateManyCompanyInputEnvelope.prototype, "skipDuplicates", void 0);
OrderCreateManyCompanyInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateManyCompanyInputEnvelope", {
        isAbstract: true
    })
], OrderCreateManyCompanyInputEnvelope);
exports.OrderCreateManyCompanyInputEnvelope = OrderCreateManyCompanyInputEnvelope;
