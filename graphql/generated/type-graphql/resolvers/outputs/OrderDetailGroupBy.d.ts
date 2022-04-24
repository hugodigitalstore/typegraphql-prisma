import { OrderDetailAvgAggregate } from "../outputs/OrderDetailAvgAggregate";
import { OrderDetailCountAggregate } from "../outputs/OrderDetailCountAggregate";
import { OrderDetailMaxAggregate } from "../outputs/OrderDetailMaxAggregate";
import { OrderDetailMinAggregate } from "../outputs/OrderDetailMinAggregate";
import { OrderDetailSumAggregate } from "../outputs/OrderDetailSumAggregate";
export declare class OrderDetailGroupBy {
    id: number;
    orderId: number;
    productId: number;
    quantity: number;
    _count: OrderDetailCountAggregate | null;
    _avg: OrderDetailAvgAggregate | null;
    _sum: OrderDetailSumAggregate | null;
    _min: OrderDetailMinAggregate | null;
    _max: OrderDetailMaxAggregate | null;
}
