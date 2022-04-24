"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateNestedManyWithoutCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyCompanyInputEnvelope_1 = require("../inputs/OrderCreateManyCompanyInputEnvelope");
const OrderCreateOrConnectWithoutCompanyInput_1 = require("../inputs/OrderCreateOrConnectWithoutCompanyInput");
const OrderCreateWithoutCompanyInput_1 = require("../inputs/OrderCreateWithoutCompanyInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateNestedManyWithoutCompanyInput = class OrderCreateNestedManyWithoutCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutCompanyInput_1.OrderCreateWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutCompanyInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutCompanyInput_1.OrderCreateOrConnectWithoutCompanyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutCompanyInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyCompanyInputEnvelope_1.OrderCreateManyCompanyInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManyCompanyInputEnvelope_1.OrderCreateManyCompanyInputEnvelope)
], OrderCreateNestedManyWithoutCompanyInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutCompanyInput.prototype, "connect", void 0);
OrderCreateNestedManyWithoutCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateNestedManyWithoutCompanyInput", {
        isAbstract: true
    })
], OrderCreateNestedManyWithoutCompanyInput);
exports.OrderCreateNestedManyWithoutCompanyInput = OrderCreateNestedManyWithoutCompanyInput;
