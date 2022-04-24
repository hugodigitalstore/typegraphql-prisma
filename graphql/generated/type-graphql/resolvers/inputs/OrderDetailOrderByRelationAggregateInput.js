"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OrderDetailOrderByRelationAggregateInput = class OrderDetailOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderDetailOrderByRelationAggregateInput.prototype, "_count", void 0);
OrderDetailOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderDetailOrderByRelationAggregateInput", {
        isAbstract: true
    })
], OrderDetailOrderByRelationAggregateInput);
exports.OrderDetailOrderByRelationAggregateInput = OrderDetailOrderByRelationAggregateInput;
