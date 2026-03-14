import { SpotStatus } from '../const/SpotStatus';
import { ParkingSpotType } from './parking-spot-type';

export class ParkingSpot {
    public constructor(
        public id: string,
        public status: SpotStatus,
        public type?: ParkingSpotType | null,
    ) {}

    static fromObject(object: {
        [key: string]: any;
    }): ParkingSpot | null {
        if (!object) return null;
        return new ParkingSpot(
            object.id,
            object.status,
            ParkingSpotType.fromObject(object.type),
        );
    }
}
