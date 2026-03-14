import { OwnerRequestStatus } from '../../../const/OwnerRequestStatus';
import type { OwnerRequestUserData } from './OwnerRequestUserData';

export interface OwnerRequestItemRes {
    id: string;
    status: OwnerRequestStatus;
    createdAt: string;
    updatedAt: string;
    user: OwnerRequestUserData;
}
