import { OwnerRequestStatus } from '../../../const/OwnerRequestStatus';
import type { OwnerRequestUserData } from './owner-request-user-data';

export interface OwnerRequestItemRes {
    id: string;
    status: OwnerRequestStatus;
    createdAt: string;
    updatedAt: string;
    user: OwnerRequestUserData;
}
