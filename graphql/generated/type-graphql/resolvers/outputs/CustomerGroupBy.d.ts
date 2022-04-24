import { CustomerAvgAggregate } from "../outputs/CustomerAvgAggregate";
import { CustomerCountAggregate } from "../outputs/CustomerCountAggregate";
import { CustomerMaxAggregate } from "../outputs/CustomerMaxAggregate";
import { CustomerMinAggregate } from "../outputs/CustomerMinAggregate";
import { CustomerSumAggregate } from "../outputs/CustomerSumAggregate";
export declare class CustomerGroupBy {
    id: number;
    email: string;
    name: string | null;
    customerId: number;
    companyId: number | null;
    _count: CustomerCountAggregate | null;
    _avg: CustomerAvgAggregate | null;
    _sum: CustomerSumAggregate | null;
    _min: CustomerMinAggregate | null;
    _max: CustomerMaxAggregate | null;
}
