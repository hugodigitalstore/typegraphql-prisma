"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CompanyScalarFieldEnum;
(function (CompanyScalarFieldEnum) {
    CompanyScalarFieldEnum["id"] = "id";
    CompanyScalarFieldEnum["name"] = "name";
    CompanyScalarFieldEnum["adress"] = "adress";
})(CompanyScalarFieldEnum = exports.CompanyScalarFieldEnum || (exports.CompanyScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CompanyScalarFieldEnum, {
    name: "CompanyScalarFieldEnum",
    description: undefined,
});
