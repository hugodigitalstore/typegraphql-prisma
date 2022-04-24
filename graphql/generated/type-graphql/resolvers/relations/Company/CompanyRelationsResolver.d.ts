import { Company } from "../../../models/Company";
import { Customer } from "../../../models/Customer";
import { Order } from "../../../models/Order";
import { Product } from "../../../models/Product";
import { CompanyCustomersArgs } from "./args/CompanyCustomersArgs";
import { CompanyOrderArgs } from "./args/CompanyOrderArgs";
import { CompanyProductArgs } from "./args/CompanyProductArgs";
export declare class CompanyRelationsResolver {
    customers(company: Company, ctx: any, args: CompanyCustomersArgs): Promise<Customer[]>;
    Order(company: Company, ctx: any, args: CompanyOrderArgs): Promise<Order[]>;
    Product(company: Company, ctx: any, args: CompanyProductArgs): Promise<Product[]>;
}
