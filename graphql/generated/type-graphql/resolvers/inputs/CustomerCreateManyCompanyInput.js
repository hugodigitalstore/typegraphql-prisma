"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCreateManyCompanyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CustomerCreateManyCompanyInput = class CustomerCreateManyCompanyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomerCreateManyCompanyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomerCreateManyCompanyInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerCreateManyCompanyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CustomerCreateManyCompanyInput.prototype, "customerId", void 0);
CustomerCreateManyCompanyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerCreateManyCompanyInput", {
        isAbstract: true
    })
], CustomerCreateManyCompanyInput);
exports.CustomerCreateManyCompanyInput = CustomerCreateManyCompanyInput;
