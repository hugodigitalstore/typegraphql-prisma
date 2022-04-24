"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderDetailWhereUniqueInput = class OrderDetailWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OrderDetailWhereUniqueInput.prototype, "id", void 0);
OrderDetailWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailWhereUniqueInput", {
        isAbstract: true
    })
], OrderDetailWhereUniqueInput);
exports.OrderDetailWhereUniqueInput = OrderDetailWhereUniqueInput;
