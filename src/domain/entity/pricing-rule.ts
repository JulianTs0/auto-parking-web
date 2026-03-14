import { ParkingSpotType } from './parking-spot-type';
import { VehicleType } from './vehicle-type';

export class PricingRule {
    public constructor(
        public id: string,
        public name: string,
        public unitPrice: number,
        public unitTime: number,
        public parkingSpotType?: ParkingSpotType | null,
        public vehicleType?: VehicleType | null,
    ) {}

    static fromObject(object: { [key: string]: any }): PricingRule | null {
        if (!object) return null;
        return new PricingRule(
            object.id,
            object.name,
            object.unitPrice,
            object.unitTime,
            ParkingSpotType.fromObject(object.parkingSpotType),
            VehicleType.fromObject(object.vehicleType),
        );
    }

}
