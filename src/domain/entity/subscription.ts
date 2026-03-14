import { SubscriptionStatus } from '../const/SubscriptionStatus';
import { MembershipPlan } from './membership-plan';

export class Subscription {
    public constructor(
        public id: string,
        public startDate: Date,
        public endDate: Date,
        public status: SubscriptionStatus,
        public membershipPlan?: MembershipPlan | null,
    ) {}

    static fromObject(object: {
        [key: string]: any;
    }): Subscription | null {
        if (!object) return null;
        return new Subscription(
            object.id,
            object.startDate,
            object.endDate,
            object.status,
            MembershipPlan.fromObject(object.membershipPlan),
        );
    }
}
