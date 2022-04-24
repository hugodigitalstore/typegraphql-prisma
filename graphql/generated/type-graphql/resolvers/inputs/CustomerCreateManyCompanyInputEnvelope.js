"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCreateManyCompanyInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerCreateManyCompanyInput_1 = require("../inputs/CustomerCreateManyCompanyInput");
let CustomerCreateManyCompanyInputEnvelope = class CustomerCreateManyCompanyInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerCreateManyCompanyInput_1.CustomerCreateManyCompanyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CustomerCreateManyCompanyInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CustomerCreateManyCompanyInputEnvelope.prototype, "skipDuplicates", void 0);
CustomerCreateManyCompanyInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerCreateManyCompanyInputEnvelope", {
        isAbstract: true
    })
], CustomerCreateManyCompanyInputEnvelope);
exports.CustomerCreateManyCompanyInputEnvelope = CustomerCreateManyCompanyInputEnvelope;
