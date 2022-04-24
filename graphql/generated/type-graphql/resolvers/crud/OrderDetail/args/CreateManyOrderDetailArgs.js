"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyOrderDetailArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderDetailCreateManyInput_1 = require("../../../inputs/OrderDetailCreateManyInput");
let CreateManyOrderDetailArgs = class CreateManyOrderDetailArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderDetailCreateManyInput_1.OrderDetailCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyOrderDetailArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyOrderDetailArgs.prototype, "skipDuplicates", void 0);
CreateManyOrderDetailArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyOrderDetailArgs);
exports.CreateManyOrderDetailArgs = CreateManyOrderDetailArgs;
