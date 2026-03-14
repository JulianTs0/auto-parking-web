import { ShiftStatus } from '../const/ShiftStatus';
import { User } from './user';

export class Shift {
    public constructor(
        public id: string,
        public startTime: Date,
        public endTime: Date,
        public initialCash: number,
        public status: ShiftStatus,
        public user?: User | null,
    ) {}

    static fromObject(object: { [key: string]: any }): Shift | null {
        if (!object) return null;
        return new Shift(
            object.id,
            object.startTime,
            object.endTime,
            object.initialCash,
            object.status,
            User.fromObject(object.user),
        );
    }
}
