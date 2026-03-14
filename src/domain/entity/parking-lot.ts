import { ParkingSpot } from './parking-spot';
import { Shift } from './shift';
import { PricingRule } from './pricing-rule';

export class ParkingLot {
    public constructor(
        public id: string,
        public name: string,
        public address: string,
        public gracePeriodMinutes: number,
        public spots?: ParkingSpot[],
        public shifts?: Shift[],
        public pricingRules?: PricingRule[],
    ) {}

    static fromObject(object: { [key: string]: any }): ParkingLot | null {
        if (!object) return null;
        return new ParkingLot(
            object.id,
            object.name,
            object.address,
            object.gracePeriodMinutes,
            object.spots
                ? object.spots
                      .map((s: any) => ParkingSpot.fromObject(s))
                      .filter((s: any) => s !== null)
                : undefined,
            object.shifts
                ? object.shifts
                      .map((s: any) => Shift.fromObject(s))
                      .filter((s: any) => s !== null)
                : undefined,
            object.pricingRules
                ? object.pricingRules
                      .map((p: any) => PricingRule.fromObject(p))
                      .filter((p: any) => p !== null)
                : undefined,
        );
    }

}
