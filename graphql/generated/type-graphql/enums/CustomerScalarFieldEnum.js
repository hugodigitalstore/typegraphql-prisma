"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CustomerScalarFieldEnum;
(function (CustomerScalarFieldEnum) {
    CustomerScalarFieldEnum["id"] = "id";
    CustomerScalarFieldEnum["email"] = "email";
    CustomerScalarFieldEnum["name"] = "name";
    CustomerScalarFieldEnum["customerId"] = "customerId";
    CustomerScalarFieldEnum["companyId"] = "companyId";
})(CustomerScalarFieldEnum = exports.CustomerScalarFieldEnum || (exports.CustomerScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CustomerScalarFieldEnum, {
    name: "CustomerScalarFieldEnum",
    description: undefined,
});
