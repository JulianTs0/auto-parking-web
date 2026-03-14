import { LogStatus } from '../const/LogStatus';
import { Vehicle } from './Vehicle';
import { ParkingSpot } from './ParkingSpot';
import { Subscription } from './Subscription';
import { StatusLog } from './StatusLog';
import { Payment } from './Payment';

export class Booking {
    public constructor(
        public id: string,
        public startTime: Date,
        public endTime: Date,
        public totalPrice: number,
        public status: LogStatus,
        public vehicle?: Vehicle | null,
        public spot?: ParkingSpot | null,
        public subscription?: Subscription | null,
        public statusLogs?: StatusLog[],
        public payment?: Payment | null,
    ) {}

    static fromObject(object: {
        [key: string]: any;
    }): Booking | null {
        if (!object) return null;
        return new Booking(
            object.id,
            object.startTime,
            object.endTime,
            object.totalPrice,
            object.status,
            Vehicle.fromObject(object.vehicle),
            ParkingSpot.fromObject(object.spot),
            Subscription.fromObject(object.subscription),
            object.statusLogs
                ? object.statusLogs
                      .map((s: any) => StatusLog.fromObject(s))
                      .filter((s: any) => s !== null)
                : undefined,
            Payment.fromObject(object.payment),
        );
    }
}
