import { Subscription } from './Subscription';
import { Vehicle } from './Vehicle';
import { PaymentMethod } from './PaymentMethod';
import { ParkingLot } from './ParkingLot';
import { UserStatus } from '../const/UserStatus';
import { Role } from '../const/Role';

export class User {
    public constructor(
        public id: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public status: UserStatus,
        public roles: Set<Role>,
        public passwordHash: string,
        public subscriptions?: Subscription[],
        public vehicles?: Vehicle[],
        public paymentMethods?: PaymentMethod[],
        public parkingLots?: ParkingLot[],
    ) { }

    static fromObject(object: { [key: string]: any }): User | null {
        if (!object) return null;
        return new User(
            object.id,
            object.firstName,
            object.lastName,
            object.email,
            object.status,
            object.roles,
            object.passwordHash,
            object.subscriptions
                ? object.subscriptions
                    .map((s: any) => Subscription.fromObject(s))
                    .filter((s: any) => s !== null)
                : undefined,
            object.vehicles
                ? object.vehicles
                    .map((v: any) => Vehicle.fromObject(v))
                    .filter((v: any) => v !== null)
                : undefined,
            object.paymentMethods
                ? object.paymentMethods
                    .map((p: any) => PaymentMethod.fromObject(p))
                    .filter((p: any) => p !== null)
                : undefined,
            object.parkingLots
                ? object.parkingLots
                    .map((p: any) => ParkingLot.fromObject(p))
                    .filter((p: any) => p !== null)
                : undefined,
        );
    }
}
