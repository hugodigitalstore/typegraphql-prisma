"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Account: crudResolvers.AccountCrudResolver,
    Session: crudResolvers.SessionCrudResolver,
    User: crudResolvers.UserCrudResolver,
    VerificationToken: crudResolvers.VerificationTokenCrudResolver,
    Customer: crudResolvers.CustomerCrudResolver,
    Company: crudResolvers.CompanyCrudResolver,
    Order: crudResolvers.OrderCrudResolver,
    OrderDetail: crudResolvers.OrderDetailCrudResolver,
    Product: crudResolvers.ProductCrudResolver
};
const actionResolversMap = {
    Account: {
        account: actionResolvers.FindUniqueAccountResolver,
        findFirstAccount: actionResolvers.FindFirstAccountResolver,
        accounts: actionResolvers.FindManyAccountResolver,
        createAccount: actionResolvers.CreateAccountResolver,
        createManyAccount: actionResolvers.CreateManyAccountResolver,
        deleteAccount: actionResolvers.DeleteAccountResolver,
        updateAccount: actionResolvers.UpdateAccountResolver,
        deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
        updateManyAccount: actionResolvers.UpdateManyAccountResolver,
        upsertAccount: actionResolvers.UpsertAccountResolver,
        aggregateAccount: actionResolvers.AggregateAccountResolver,
        groupByAccount: actionResolvers.GroupByAccountResolver
    },
    Session: {
        session: actionResolvers.FindUniqueSessionResolver,
        findFirstSession: actionResolvers.FindFirstSessionResolver,
        sessions: actionResolvers.FindManySessionResolver,
        createSession: actionResolvers.CreateSessionResolver,
        createManySession: actionResolvers.CreateManySessionResolver,
        deleteSession: actionResolvers.DeleteSessionResolver,
        updateSession: actionResolvers.UpdateSessionResolver,
        deleteManySession: actionResolvers.DeleteManySessionResolver,
        updateManySession: actionResolvers.UpdateManySessionResolver,
        upsertSession: actionResolvers.UpsertSessionResolver,
        aggregateSession: actionResolvers.AggregateSessionResolver,
        groupBySession: actionResolvers.GroupBySessionResolver
    },
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    },
    VerificationToken: {
        verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
        findFirstVerificationToken: actionResolvers.FindFirstVerificationTokenResolver,
        verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
        createVerificationToken: actionResolvers.CreateVerificationTokenResolver,
        createManyVerificationToken: actionResolvers.CreateManyVerificationTokenResolver,
        deleteVerificationToken: actionResolvers.DeleteVerificationTokenResolver,
        updateVerificationToken: actionResolvers.UpdateVerificationTokenResolver,
        deleteManyVerificationToken: actionResolvers.DeleteManyVerificationTokenResolver,
        updateManyVerificationToken: actionResolvers.UpdateManyVerificationTokenResolver,
        upsertVerificationToken: actionResolvers.UpsertVerificationTokenResolver,
        aggregateVerificationToken: actionResolvers.AggregateVerificationTokenResolver,
        groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver
    },
    Customer: {
        customer: actionResolvers.FindUniqueCustomerResolver,
        findFirstCustomer: actionResolvers.FindFirstCustomerResolver,
        customers: actionResolvers.FindManyCustomerResolver,
        createCustomer: actionResolvers.CreateCustomerResolver,
        createManyCustomer: actionResolvers.CreateManyCustomerResolver,
        deleteCustomer: actionResolvers.DeleteCustomerResolver,
        updateCustomer: actionResolvers.UpdateCustomerResolver,
        deleteManyCustomer: actionResolvers.DeleteManyCustomerResolver,
        updateManyCustomer: actionResolvers.UpdateManyCustomerResolver,
        upsertCustomer: actionResolvers.UpsertCustomerResolver,
        aggregateCustomer: actionResolvers.AggregateCustomerResolver,
        groupByCustomer: actionResolvers.GroupByCustomerResolver
    },
    Company: {
        company: actionResolvers.FindUniqueCompanyResolver,
        findFirstCompany: actionResolvers.FindFirstCompanyResolver,
        companies: actionResolvers.FindManyCompanyResolver,
        createCompany: actionResolvers.CreateCompanyResolver,
        createManyCompany: actionResolvers.CreateManyCompanyResolver,
        deleteCompany: actionResolvers.DeleteCompanyResolver,
        updateCompany: actionResolvers.UpdateCompanyResolver,
        deleteManyCompany: actionResolvers.DeleteManyCompanyResolver,
        updateManyCompany: actionResolvers.UpdateManyCompanyResolver,
        upsertCompany: actionResolvers.UpsertCompanyResolver,
        aggregateCompany: actionResolvers.AggregateCompanyResolver,
        groupByCompany: actionResolvers.GroupByCompanyResolver
    },
    Order: {
        order: actionResolvers.FindUniqueOrderResolver,
        findFirstOrder: actionResolvers.FindFirstOrderResolver,
        orders: actionResolvers.FindManyOrderResolver,
        createOrder: actionResolvers.CreateOrderResolver,
        createManyOrder: actionResolvers.CreateManyOrderResolver,
        deleteOrder: actionResolvers.DeleteOrderResolver,
        updateOrder: actionResolvers.UpdateOrderResolver,
        deleteManyOrder: actionResolvers.DeleteManyOrderResolver,
        updateManyOrder: actionResolvers.UpdateManyOrderResolver,
        upsertOrder: actionResolvers.UpsertOrderResolver,
        aggregateOrder: actionResolvers.AggregateOrderResolver,
        groupByOrder: actionResolvers.GroupByOrderResolver
    },
    OrderDetail: {
        orderDetail: actionResolvers.FindUniqueOrderDetailResolver,
        findFirstOrderDetail: actionResolvers.FindFirstOrderDetailResolver,
        orderDetails: actionResolvers.FindManyOrderDetailResolver,
        createOrderDetail: actionResolvers.CreateOrderDetailResolver,
        createManyOrderDetail: actionResolvers.CreateManyOrderDetailResolver,
        deleteOrderDetail: actionResolvers.DeleteOrderDetailResolver,
        updateOrderDetail: actionResolvers.UpdateOrderDetailResolver,
        deleteManyOrderDetail: actionResolvers.DeleteManyOrderDetailResolver,
        updateManyOrderDetail: actionResolvers.UpdateManyOrderDetailResolver,
        upsertOrderDetail: actionResolvers.UpsertOrderDetailResolver,
        aggregateOrderDetail: actionResolvers.AggregateOrderDetailResolver,
        groupByOrderDetail: actionResolvers.GroupByOrderDetailResolver
    },
    Product: {
        product: actionResolvers.FindUniqueProductResolver,
        findFirstProduct: actionResolvers.FindFirstProductResolver,
        products: actionResolvers.FindManyProductResolver,
        createProduct: actionResolvers.CreateProductResolver,
        createManyProduct: actionResolvers.CreateManyProductResolver,
        deleteProduct: actionResolvers.DeleteProductResolver,
        updateProduct: actionResolvers.UpdateProductResolver,
        deleteManyProduct: actionResolvers.DeleteManyProductResolver,
        updateManyProduct: actionResolvers.UpdateManyProductResolver,
        upsertProduct: actionResolvers.UpsertProductResolver,
        aggregateProduct: actionResolvers.AggregateProductResolver,
        groupByProduct: actionResolvers.GroupByProductResolver
    }
};
const crudResolversInfo = {
    Account: ["account", "findFirstAccount", "accounts", "createAccount", "createManyAccount", "deleteAccount", "updateAccount", "deleteManyAccount", "updateManyAccount", "upsertAccount", "aggregateAccount", "groupByAccount"],
    Session: ["session", "findFirstSession", "sessions", "createSession", "createManySession", "deleteSession", "updateSession", "deleteManySession", "updateManySession", "upsertSession", "aggregateSession", "groupBySession"],
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
    VerificationToken: ["verificationToken", "findFirstVerificationToken", "verificationTokens", "createVerificationToken", "createManyVerificationToken", "deleteVerificationToken", "updateVerificationToken", "deleteManyVerificationToken", "updateManyVerificationToken", "upsertVerificationToken", "aggregateVerificationToken", "groupByVerificationToken"],
    Customer: ["customer", "findFirstCustomer", "customers", "createCustomer", "createManyCustomer", "deleteCustomer", "updateCustomer", "deleteManyCustomer", "updateManyCustomer", "upsertCustomer", "aggregateCustomer", "groupByCustomer"],
    Company: ["company", "findFirstCompany", "companies", "createCompany", "createManyCompany", "deleteCompany", "updateCompany", "deleteManyCompany", "updateManyCompany", "upsertCompany", "aggregateCompany", "groupByCompany"],
    Order: ["order", "findFirstOrder", "orders", "createOrder", "createManyOrder", "deleteOrder", "updateOrder", "deleteManyOrder", "updateManyOrder", "upsertOrder", "aggregateOrder", "groupByOrder"],
    OrderDetail: ["orderDetail", "findFirstOrderDetail", "orderDetails", "createOrderDetail", "createManyOrderDetail", "deleteOrderDetail", "updateOrderDetail", "deleteManyOrderDetail", "updateManyOrderDetail", "upsertOrderDetail", "aggregateOrderDetail", "groupByOrderDetail"],
    Product: ["product", "findFirstProduct", "products", "createProduct", "createManyProduct", "deleteProduct", "updateProduct", "deleteManyProduct", "updateManyProduct", "upsertProduct", "aggregateProduct", "groupByProduct"]
};
const argsInfo = {
    FindUniqueAccountArgs: ["where"],
    FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateAccountArgs: ["data"],
    CreateManyAccountArgs: ["data", "skipDuplicates"],
    DeleteAccountArgs: ["where"],
    UpdateAccountArgs: ["data", "where"],
    DeleteManyAccountArgs: ["where"],
    UpdateManyAccountArgs: ["data", "where"],
    UpsertAccountArgs: ["where", "create", "update"],
    AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueSessionArgs: ["where"],
    FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateSessionArgs: ["data"],
    CreateManySessionArgs: ["data", "skipDuplicates"],
    DeleteSessionArgs: ["where"],
    UpdateSessionArgs: ["data", "where"],
    DeleteManySessionArgs: ["where"],
    UpdateManySessionArgs: ["data", "where"],
    UpsertSessionArgs: ["where", "create", "update"],
    AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueVerificationTokenArgs: ["where"],
    FindFirstVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateVerificationTokenArgs: ["data"],
    CreateManyVerificationTokenArgs: ["data", "skipDuplicates"],
    DeleteVerificationTokenArgs: ["where"],
    UpdateVerificationTokenArgs: ["data", "where"],
    DeleteManyVerificationTokenArgs: ["where"],
    UpdateManyVerificationTokenArgs: ["data", "where"],
    UpsertVerificationTokenArgs: ["where", "create", "update"],
    AggregateVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByVerificationTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueCustomerArgs: ["where"],
    FindFirstCustomerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCustomerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateCustomerArgs: ["data"],
    CreateManyCustomerArgs: ["data", "skipDuplicates"],
    DeleteCustomerArgs: ["where"],
    UpdateCustomerArgs: ["data", "where"],
    DeleteManyCustomerArgs: ["where"],
    UpdateManyCustomerArgs: ["data", "where"],
    UpsertCustomerArgs: ["where", "create", "update"],
    AggregateCustomerArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByCustomerArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueCompanyArgs: ["where"],
    FindFirstCompanyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCompanyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateCompanyArgs: ["data"],
    CreateManyCompanyArgs: ["data", "skipDuplicates"],
    DeleteCompanyArgs: ["where"],
    UpdateCompanyArgs: ["data", "where"],
    DeleteManyCompanyArgs: ["where"],
    UpdateManyCompanyArgs: ["data", "where"],
    UpsertCompanyArgs: ["where", "create", "update"],
    AggregateCompanyArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByCompanyArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueOrderArgs: ["where"],
    FindFirstOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateOrderArgs: ["data"],
    CreateManyOrderArgs: ["data", "skipDuplicates"],
    DeleteOrderArgs: ["where"],
    UpdateOrderArgs: ["data", "where"],
    DeleteManyOrderArgs: ["where"],
    UpdateManyOrderArgs: ["data", "where"],
    UpsertOrderArgs: ["where", "create", "update"],
    AggregateOrderArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByOrderArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueOrderDetailArgs: ["where"],
    FindFirstOrderDetailArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyOrderDetailArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateOrderDetailArgs: ["data"],
    CreateManyOrderDetailArgs: ["data", "skipDuplicates"],
    DeleteOrderDetailArgs: ["where"],
    UpdateOrderDetailArgs: ["data", "where"],
    DeleteManyOrderDetailArgs: ["where"],
    UpdateManyOrderDetailArgs: ["data", "where"],
    UpsertOrderDetailArgs: ["where", "create", "update"],
    AggregateOrderDetailArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByOrderDetailArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueProductArgs: ["where"],
    FindFirstProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateProductArgs: ["data"],
    CreateManyProductArgs: ["data", "skipDuplicates"],
    DeleteProductArgs: ["where"],
    UpdateProductArgs: ["data", "where"],
    DeleteManyProductArgs: ["where"],
    UpdateManyProductArgs: ["data", "where"],
    UpsertProductArgs: ["where", "create", "update"],
    AggregateProductArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByProductArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Account: relationResolvers.AccountRelationsResolver,
    Session: relationResolvers.SessionRelationsResolver,
    User: relationResolvers.UserRelationsResolver,
    Customer: relationResolvers.CustomerRelationsResolver,
    Company: relationResolvers.CompanyRelationsResolver,
    Order: relationResolvers.OrderRelationsResolver,
    OrderDetail: relationResolvers.OrderDetailRelationsResolver,
    Product: relationResolvers.ProductRelationsResolver
};
const relationResolversInfo = {
    Account: ["user"],
    Session: ["user"],
    User: ["accounts", "sessions"],
    Customer: ["orders", "Company"],
    Company: ["customers", "Order", "Product"],
    Order: ["customer", "company", "OrderDetail"],
    OrderDetail: ["order", "product"],
    Product: ["company", "OrderDetail"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Account: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    Session: ["id", "sessionToken", "userId", "expires"],
    User: ["id", "name", "email", "password", "emailVerified", "image"],
    VerificationToken: ["identifier", "token", "expires"],
    Customer: ["id", "email", "name", "customerId", "companyId"],
    Company: ["id", "name", "adress"],
    Order: ["id", "amount", "customerId", "companyId"],
    OrderDetail: ["id", "orderId", "productId", "quantity"],
    Product: ["id", "name", "price", "companyId"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
    AccountGroupBy: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateSession: ["_count", "_min", "_max"],
    SessionGroupBy: ["id", "sessionToken", "userId", "expires", "_count", "_min", "_max"],
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "name", "email", "password", "emailVerified", "image", "_count", "_min", "_max"],
    AggregateVerificationToken: ["_count", "_min", "_max"],
    VerificationTokenGroupBy: ["identifier", "token", "expires", "_count", "_min", "_max"],
    AggregateCustomer: ["_count", "_avg", "_sum", "_min", "_max"],
    CustomerGroupBy: ["id", "email", "name", "customerId", "companyId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateCompany: ["_count", "_avg", "_sum", "_min", "_max"],
    CompanyGroupBy: ["id", "name", "adress", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateOrder: ["_count", "_avg", "_sum", "_min", "_max"],
    OrderGroupBy: ["id", "amount", "customerId", "companyId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateOrderDetail: ["_count", "_avg", "_sum", "_min", "_max"],
    OrderDetailGroupBy: ["id", "orderId", "productId", "quantity", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateProduct: ["_count", "_avg", "_sum", "_min", "_max"],
    ProductGroupBy: ["id", "name", "price", "companyId", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    AccountCountAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_all"],
    AccountAvgAggregate: ["expires_at"],
    AccountSumAggregate: ["expires_at"],
    AccountMinAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountMaxAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionCountAggregate: ["id", "sessionToken", "userId", "expires", "_all"],
    SessionMinAggregate: ["id", "sessionToken", "userId", "expires"],
    SessionMaxAggregate: ["id", "sessionToken", "userId", "expires"],
    UserCount: ["accounts", "sessions"],
    UserCountAggregate: ["id", "name", "email", "password", "emailVerified", "image", "_all"],
    UserMinAggregate: ["id", "name", "email", "password", "emailVerified", "image"],
    UserMaxAggregate: ["id", "name", "email", "password", "emailVerified", "image"],
    VerificationTokenCountAggregate: ["identifier", "token", "expires", "_all"],
    VerificationTokenMinAggregate: ["identifier", "token", "expires"],
    VerificationTokenMaxAggregate: ["identifier", "token", "expires"],
    CustomerCount: ["orders"],
    CustomerCountAggregate: ["id", "email", "name", "customerId", "companyId", "_all"],
    CustomerAvgAggregate: ["id", "customerId", "companyId"],
    CustomerSumAggregate: ["id", "customerId", "companyId"],
    CustomerMinAggregate: ["id", "email", "name", "customerId", "companyId"],
    CustomerMaxAggregate: ["id", "email", "name", "customerId", "companyId"],
    CompanyCount: ["customers", "Order", "Product"],
    CompanyCountAggregate: ["id", "name", "adress", "_all"],
    CompanyAvgAggregate: ["id"],
    CompanySumAggregate: ["id"],
    CompanyMinAggregate: ["id", "name", "adress"],
    CompanyMaxAggregate: ["id", "name", "adress"],
    OrderCount: ["OrderDetail"],
    OrderCountAggregate: ["id", "amount", "customerId", "companyId", "_all"],
    OrderAvgAggregate: ["id", "amount", "customerId", "companyId"],
    OrderSumAggregate: ["id", "amount", "customerId", "companyId"],
    OrderMinAggregate: ["id", "amount", "customerId", "companyId"],
    OrderMaxAggregate: ["id", "amount", "customerId", "companyId"],
    OrderDetailCountAggregate: ["id", "orderId", "productId", "quantity", "_all"],
    OrderDetailAvgAggregate: ["id", "orderId", "productId", "quantity"],
    OrderDetailSumAggregate: ["id", "orderId", "productId", "quantity"],
    OrderDetailMinAggregate: ["id", "orderId", "productId", "quantity"],
    OrderDetailMaxAggregate: ["id", "orderId", "productId", "quantity"],
    ProductCount: ["OrderDetail"],
    ProductCountAggregate: ["id", "name", "price", "companyId", "_all"],
    ProductAvgAggregate: ["id", "price", "companyId"],
    ProductSumAggregate: ["id", "price", "companyId"],
    ProductMinAggregate: ["id", "name", "price", "companyId"],
    ProductMaxAggregate: ["id", "name", "price", "companyId"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    AccountWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountOrderByWithRelationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountWhereUniqueInput: ["id", "provider_providerAccountId"],
    AccountOrderByWithAggregationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_max", "_min", "_sum"],
    AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires", "user"],
    SessionOrderByWithRelationInput: ["id", "sessionToken", "userId", "expires", "user"],
    SessionWhereUniqueInput: ["id", "sessionToken"],
    SessionOrderByWithAggregationInput: ["id", "sessionToken", "userId", "expires", "_count", "_max", "_min"],
    SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "emailVerified", "image", "accounts", "sessions"],
    UserOrderByWithRelationInput: ["id", "name", "email", "password", "emailVerified", "image", "accounts", "sessions"],
    UserWhereUniqueInput: ["id", "email"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "password", "emailVerified", "image", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "emailVerified", "image"],
    VerificationTokenWhereInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    VerificationTokenOrderByWithRelationInput: ["identifier", "token", "expires"],
    VerificationTokenWhereUniqueInput: ["token", "identifier_token"],
    VerificationTokenOrderByWithAggregationInput: ["identifier", "token", "expires", "_count", "_max", "_min"],
    VerificationTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    CustomerWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "orders", "customerId", "Company", "companyId"],
    CustomerOrderByWithRelationInput: ["id", "email", "name", "orders", "customerId", "Company", "companyId"],
    CustomerWhereUniqueInput: ["id", "email"],
    CustomerOrderByWithAggregationInput: ["id", "email", "name", "customerId", "companyId", "_count", "_avg", "_max", "_min", "_sum"],
    CustomerScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "name", "customerId", "companyId"],
    CompanyWhereInput: ["AND", "OR", "NOT", "id", "name", "adress", "customers", "Order", "Product"],
    CompanyOrderByWithRelationInput: ["id", "name", "adress", "customers", "Order", "Product"],
    CompanyWhereUniqueInput: ["id", "name"],
    CompanyOrderByWithAggregationInput: ["id", "name", "adress", "_count", "_avg", "_max", "_min", "_sum"],
    CompanyScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "adress"],
    OrderWhereInput: ["AND", "OR", "NOT", "id", "amount", "customerId", "customer", "companyId", "company", "OrderDetail"],
    OrderOrderByWithRelationInput: ["id", "amount", "customerId", "customer", "companyId", "company", "OrderDetail"],
    OrderWhereUniqueInput: ["id"],
    OrderOrderByWithAggregationInput: ["id", "amount", "customerId", "companyId", "_count", "_avg", "_max", "_min", "_sum"],
    OrderScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "amount", "customerId", "companyId"],
    OrderDetailWhereInput: ["AND", "OR", "NOT", "id", "orderId", "order", "product", "productId", "quantity"],
    OrderDetailOrderByWithRelationInput: ["id", "orderId", "order", "product", "productId", "quantity"],
    OrderDetailWhereUniqueInput: ["id"],
    OrderDetailOrderByWithAggregationInput: ["id", "orderId", "productId", "quantity", "_count", "_avg", "_max", "_min", "_sum"],
    OrderDetailScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "orderId", "productId", "quantity"],
    ProductWhereInput: ["AND", "OR", "NOT", "id", "name", "price", "companyId", "company", "OrderDetail"],
    ProductOrderByWithRelationInput: ["id", "name", "price", "companyId", "company", "OrderDetail"],
    ProductWhereUniqueInput: ["id", "name"],
    ProductOrderByWithAggregationInput: ["id", "name", "price", "companyId", "_count", "_avg", "_max", "_min", "_sum"],
    ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "price", "companyId"],
    AccountCreateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountUpdateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
    AccountCreateManyInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountUpdateManyMutationInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionCreateInput: ["id", "sessionToken", "expires", "user"],
    SessionUpdateInput: ["id", "sessionToken", "expires", "user"],
    SessionCreateManyInput: ["id", "sessionToken", "userId", "expires"],
    SessionUpdateManyMutationInput: ["id", "sessionToken", "expires"],
    UserCreateInput: ["id", "name", "email", "password", "emailVerified", "image", "accounts", "sessions"],
    UserUpdateInput: ["id", "name", "email", "password", "emailVerified", "image", "accounts", "sessions"],
    UserCreateManyInput: ["id", "name", "email", "password", "emailVerified", "image"],
    UserUpdateManyMutationInput: ["id", "name", "email", "password", "emailVerified", "image"],
    VerificationTokenCreateInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateInput: ["identifier", "token", "expires"],
    VerificationTokenCreateManyInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateManyMutationInput: ["identifier", "token", "expires"],
    CustomerCreateInput: ["email", "name", "orders", "customerId", "Company"],
    CustomerUpdateInput: ["email", "name", "orders", "customerId", "Company"],
    CustomerCreateManyInput: ["id", "email", "name", "customerId", "companyId"],
    CustomerUpdateManyMutationInput: ["email", "name", "customerId"],
    CompanyCreateInput: ["name", "adress", "customers", "Order", "Product"],
    CompanyUpdateInput: ["name", "adress", "customers", "Order", "Product"],
    CompanyCreateManyInput: ["id", "name", "adress"],
    CompanyUpdateManyMutationInput: ["name", "adress"],
    OrderCreateInput: ["amount", "customer", "company", "OrderDetail"],
    OrderUpdateInput: ["amount", "customer", "company", "OrderDetail"],
    OrderCreateManyInput: ["id", "amount", "customerId", "companyId"],
    OrderUpdateManyMutationInput: ["amount"],
    OrderDetailCreateInput: ["order", "product", "quantity"],
    OrderDetailUpdateInput: ["order", "product", "quantity"],
    OrderDetailCreateManyInput: ["id", "orderId", "productId", "quantity"],
    OrderDetailUpdateManyMutationInput: ["quantity"],
    ProductCreateInput: ["name", "price", "company", "OrderDetail"],
    ProductUpdateInput: ["name", "price", "company", "OrderDetail"],
    ProductCreateManyInput: ["id", "name", "price", "companyId"],
    ProductUpdateManyMutationInput: ["name", "price"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserRelationFilter: ["is", "isNot"],
    AccountProviderProviderAccountIdCompoundUniqueInput: ["provider", "providerAccountId"],
    AccountCountOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountAvgOrderByAggregateInput: ["expires_at"],
    AccountMaxOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountMinOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountSumOrderByAggregateInput: ["expires_at"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    SessionCountOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    SessionMaxOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    SessionMinOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AccountListRelationFilter: ["every", "some", "none"],
    SessionListRelationFilter: ["every", "some", "none"],
    AccountOrderByRelationAggregateInput: ["_count"],
    SessionOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "password", "emailVerified", "image"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "password", "emailVerified", "image"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "password", "emailVerified", "image"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    VerificationTokenIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
    VerificationTokenCountOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMaxOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMinOrderByAggregateInput: ["identifier", "token", "expires"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    OrderListRelationFilter: ["every", "some", "none"],
    CompanyRelationFilter: ["is", "isNot"],
    OrderOrderByRelationAggregateInput: ["_count"],
    CustomerCountOrderByAggregateInput: ["id", "email", "name", "customerId", "companyId"],
    CustomerAvgOrderByAggregateInput: ["id", "customerId", "companyId"],
    CustomerMaxOrderByAggregateInput: ["id", "email", "name", "customerId", "companyId"],
    CustomerMinOrderByAggregateInput: ["id", "email", "name", "customerId", "companyId"],
    CustomerSumOrderByAggregateInput: ["id", "customerId", "companyId"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    CustomerListRelationFilter: ["every", "some", "none"],
    ProductListRelationFilter: ["every", "some", "none"],
    CustomerOrderByRelationAggregateInput: ["_count"],
    ProductOrderByRelationAggregateInput: ["_count"],
    CompanyCountOrderByAggregateInput: ["id", "name", "adress"],
    CompanyAvgOrderByAggregateInput: ["id"],
    CompanyMaxOrderByAggregateInput: ["id", "name", "adress"],
    CompanyMinOrderByAggregateInput: ["id", "name", "adress"],
    CompanySumOrderByAggregateInput: ["id"],
    CustomerRelationFilter: ["is", "isNot"],
    OrderDetailListRelationFilter: ["every", "some", "none"],
    OrderDetailOrderByRelationAggregateInput: ["_count"],
    OrderCountOrderByAggregateInput: ["id", "amount", "customerId", "companyId"],
    OrderAvgOrderByAggregateInput: ["id", "amount", "customerId", "companyId"],
    OrderMaxOrderByAggregateInput: ["id", "amount", "customerId", "companyId"],
    OrderMinOrderByAggregateInput: ["id", "amount", "customerId", "companyId"],
    OrderSumOrderByAggregateInput: ["id", "amount", "customerId", "companyId"],
    OrderRelationFilter: ["is", "isNot"],
    ProductRelationFilter: ["is", "isNot"],
    OrderDetailCountOrderByAggregateInput: ["id", "orderId", "productId", "quantity"],
    OrderDetailAvgOrderByAggregateInput: ["id", "orderId", "productId", "quantity"],
    OrderDetailMaxOrderByAggregateInput: ["id", "orderId", "productId", "quantity"],
    OrderDetailMinOrderByAggregateInput: ["id", "orderId", "productId", "quantity"],
    OrderDetailSumOrderByAggregateInput: ["id", "orderId", "productId", "quantity"],
    ProductCountOrderByAggregateInput: ["id", "name", "price", "companyId"],
    ProductAvgOrderByAggregateInput: ["id", "price", "companyId"],
    ProductMaxOrderByAggregateInput: ["id", "name", "price", "companyId"],
    ProductMinOrderByAggregateInput: ["id", "name", "price", "companyId"],
    ProductSumOrderByAggregateInput: ["id", "price", "companyId"],
    UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserUpdateOneRequiredWithoutAccountsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutSessionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    AccountUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    SessionUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    OrderCreateNestedManyWithoutCustomerInput: ["create", "connectOrCreate", "createMany", "connect"],
    CompanyCreateNestedOneWithoutCustomersInput: ["create", "connectOrCreate", "connect"],
    OrderUpdateManyWithoutCustomerInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    CompanyUpdateOneWithoutCustomersInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    CustomerCreateNestedManyWithoutCompanyInput: ["create", "connectOrCreate", "createMany", "connect"],
    OrderCreateNestedManyWithoutCompanyInput: ["create", "connectOrCreate", "createMany", "connect"],
    ProductCreateNestedManyWithoutCompanyInput: ["create", "connectOrCreate", "createMany", "connect"],
    CustomerUpdateManyWithoutCompanyInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    OrderUpdateManyWithoutCompanyInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProductUpdateManyWithoutCompanyInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    CustomerCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
    CompanyCreateNestedOneWithoutOrderInput: ["create", "connectOrCreate", "connect"],
    OrderDetailCreateNestedManyWithoutOrderInput: ["create", "connectOrCreate", "createMany", "connect"],
    CustomerUpdateOneRequiredWithoutOrdersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    CompanyUpdateOneRequiredWithoutOrderInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    OrderDetailUpdateManyWithoutOrderInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    OrderCreateNestedOneWithoutOrderDetailInput: ["create", "connectOrCreate", "connect"],
    ProductCreateNestedOneWithoutOrderDetailInput: ["create", "connectOrCreate", "connect"],
    OrderUpdateOneRequiredWithoutOrderDetailInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ProductUpdateOneRequiredWithoutOrderDetailInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    CompanyCreateNestedOneWithoutProductInput: ["create", "connectOrCreate", "connect"],
    OrderDetailCreateNestedManyWithoutProductInput: ["create", "connectOrCreate", "createMany", "connect"],
    CompanyUpdateOneRequiredWithoutProductInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    OrderDetailUpdateManyWithoutProductInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserCreateWithoutAccountsInput: ["id", "name", "email", "password", "emailVerified", "image", "sessions"],
    UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
    UserUpsertWithoutAccountsInput: ["update", "create"],
    UserUpdateWithoutAccountsInput: ["id", "name", "email", "password", "emailVerified", "image", "sessions"],
    UserCreateWithoutSessionsInput: ["id", "name", "email", "password", "emailVerified", "image", "accounts"],
    UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
    UserUpsertWithoutSessionsInput: ["update", "create"],
    UserUpdateWithoutSessionsInput: ["id", "name", "email", "password", "emailVerified", "image", "accounts"],
    AccountCreateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    AccountCreateOrConnectWithoutUserInput: ["where", "create"],
    AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    SessionCreateWithoutUserInput: ["id", "sessionToken", "expires"],
    SessionCreateOrConnectWithoutUserInput: ["where", "create"],
    SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    AccountScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    SessionScalarWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
    OrderCreateWithoutCustomerInput: ["amount", "company", "OrderDetail"],
    OrderCreateOrConnectWithoutCustomerInput: ["where", "create"],
    OrderCreateManyCustomerInputEnvelope: ["data", "skipDuplicates"],
    CompanyCreateWithoutCustomersInput: ["name", "adress", "Order", "Product"],
    CompanyCreateOrConnectWithoutCustomersInput: ["where", "create"],
    OrderUpsertWithWhereUniqueWithoutCustomerInput: ["where", "update", "create"],
    OrderUpdateWithWhereUniqueWithoutCustomerInput: ["where", "data"],
    OrderUpdateManyWithWhereWithoutCustomerInput: ["where", "data"],
    OrderScalarWhereInput: ["AND", "OR", "NOT", "id", "amount", "customerId", "companyId"],
    CompanyUpsertWithoutCustomersInput: ["update", "create"],
    CompanyUpdateWithoutCustomersInput: ["name", "adress", "Order", "Product"],
    CustomerCreateWithoutCompanyInput: ["email", "name", "orders", "customerId"],
    CustomerCreateOrConnectWithoutCompanyInput: ["where", "create"],
    CustomerCreateManyCompanyInputEnvelope: ["data", "skipDuplicates"],
    OrderCreateWithoutCompanyInput: ["amount", "customer", "OrderDetail"],
    OrderCreateOrConnectWithoutCompanyInput: ["where", "create"],
    OrderCreateManyCompanyInputEnvelope: ["data", "skipDuplicates"],
    ProductCreateWithoutCompanyInput: ["name", "price", "OrderDetail"],
    ProductCreateOrConnectWithoutCompanyInput: ["where", "create"],
    ProductCreateManyCompanyInputEnvelope: ["data", "skipDuplicates"],
    CustomerUpsertWithWhereUniqueWithoutCompanyInput: ["where", "update", "create"],
    CustomerUpdateWithWhereUniqueWithoutCompanyInput: ["where", "data"],
    CustomerUpdateManyWithWhereWithoutCompanyInput: ["where", "data"],
    CustomerScalarWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "customerId", "companyId"],
    OrderUpsertWithWhereUniqueWithoutCompanyInput: ["where", "update", "create"],
    OrderUpdateWithWhereUniqueWithoutCompanyInput: ["where", "data"],
    OrderUpdateManyWithWhereWithoutCompanyInput: ["where", "data"],
    ProductUpsertWithWhereUniqueWithoutCompanyInput: ["where", "update", "create"],
    ProductUpdateWithWhereUniqueWithoutCompanyInput: ["where", "data"],
    ProductUpdateManyWithWhereWithoutCompanyInput: ["where", "data"],
    ProductScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "price", "companyId"],
    CustomerCreateWithoutOrdersInput: ["email", "name", "customerId", "Company"],
    CustomerCreateOrConnectWithoutOrdersInput: ["where", "create"],
    CompanyCreateWithoutOrderInput: ["name", "adress", "customers", "Product"],
    CompanyCreateOrConnectWithoutOrderInput: ["where", "create"],
    OrderDetailCreateWithoutOrderInput: ["product", "quantity"],
    OrderDetailCreateOrConnectWithoutOrderInput: ["where", "create"],
    OrderDetailCreateManyOrderInputEnvelope: ["data", "skipDuplicates"],
    CustomerUpsertWithoutOrdersInput: ["update", "create"],
    CustomerUpdateWithoutOrdersInput: ["email", "name", "customerId", "Company"],
    CompanyUpsertWithoutOrderInput: ["update", "create"],
    CompanyUpdateWithoutOrderInput: ["name", "adress", "customers", "Product"],
    OrderDetailUpsertWithWhereUniqueWithoutOrderInput: ["where", "update", "create"],
    OrderDetailUpdateWithWhereUniqueWithoutOrderInput: ["where", "data"],
    OrderDetailUpdateManyWithWhereWithoutOrderInput: ["where", "data"],
    OrderDetailScalarWhereInput: ["AND", "OR", "NOT", "id", "orderId", "productId", "quantity"],
    OrderCreateWithoutOrderDetailInput: ["amount", "customer", "company"],
    OrderCreateOrConnectWithoutOrderDetailInput: ["where", "create"],
    ProductCreateWithoutOrderDetailInput: ["name", "price", "company"],
    ProductCreateOrConnectWithoutOrderDetailInput: ["where", "create"],
    OrderUpsertWithoutOrderDetailInput: ["update", "create"],
    OrderUpdateWithoutOrderDetailInput: ["amount", "customer", "company"],
    ProductUpsertWithoutOrderDetailInput: ["update", "create"],
    ProductUpdateWithoutOrderDetailInput: ["name", "price", "company"],
    CompanyCreateWithoutProductInput: ["name", "adress", "customers", "Order"],
    CompanyCreateOrConnectWithoutProductInput: ["where", "create"],
    OrderDetailCreateWithoutProductInput: ["order", "quantity"],
    OrderDetailCreateOrConnectWithoutProductInput: ["where", "create"],
    OrderDetailCreateManyProductInputEnvelope: ["data", "skipDuplicates"],
    CompanyUpsertWithoutProductInput: ["update", "create"],
    CompanyUpdateWithoutProductInput: ["name", "adress", "customers", "Order"],
    OrderDetailUpsertWithWhereUniqueWithoutProductInput: ["where", "update", "create"],
    OrderDetailUpdateWithWhereUniqueWithoutProductInput: ["where", "data"],
    OrderDetailUpdateManyWithWhereWithoutProductInput: ["where", "data"],
    AccountCreateManyUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionCreateManyUserInput: ["id", "sessionToken", "expires"],
    AccountUpdateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
    SessionUpdateWithoutUserInput: ["id", "sessionToken", "expires"],
    OrderCreateManyCustomerInput: ["id", "amount", "companyId"],
    OrderUpdateWithoutCustomerInput: ["amount", "company", "OrderDetail"],
    CustomerCreateManyCompanyInput: ["id", "email", "name", "customerId"],
    OrderCreateManyCompanyInput: ["id", "amount", "customerId"],
    ProductCreateManyCompanyInput: ["id", "name", "price"],
    CustomerUpdateWithoutCompanyInput: ["email", "name", "orders", "customerId"],
    OrderUpdateWithoutCompanyInput: ["amount", "customer", "OrderDetail"],
    ProductUpdateWithoutCompanyInput: ["name", "price", "OrderDetail"],
    OrderDetailCreateManyOrderInput: ["id", "productId", "quantity"],
    OrderDetailUpdateWithoutOrderInput: ["product", "quantity"],
    OrderDetailCreateManyProductInput: ["id", "orderId", "quantity"],
    OrderDetailUpdateWithoutProductInput: ["order", "quantity"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
