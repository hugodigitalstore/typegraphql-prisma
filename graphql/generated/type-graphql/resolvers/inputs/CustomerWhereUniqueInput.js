"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CustomerWhereUniqueInput = class CustomerWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomerWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerWhereUniqueInput.prototype, "email", void 0);
CustomerWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerWhereUniqueInput", {
        isAbstract: true
    })
], CustomerWhereUniqueInput);
exports.CustomerWhereUniqueInput = CustomerWhereUniqueInput;
