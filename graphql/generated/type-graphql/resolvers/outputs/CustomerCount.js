"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CustomerCount = class CustomerCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CustomerCount.prototype, "orders", void 0);
CustomerCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CustomerCount", {
        isAbstract: true
    })
], CustomerCount);
exports.CustomerCount = CustomerCount;
