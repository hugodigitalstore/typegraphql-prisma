"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanySumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CompanySumAggregate = class CompanySumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CompanySumAggregate.prototype, "id", void 0);
CompanySumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CompanySumAggregate", {
        isAbstract: true
    })
], CompanySumAggregate);
exports.CompanySumAggregate = CompanySumAggregate;
