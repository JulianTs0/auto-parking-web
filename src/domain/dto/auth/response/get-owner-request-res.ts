import type { OwnerRequestItemRes } from './owner-request-item-res';

export interface GetOwnerRequestRes {
    requests: OwnerRequestItemRes[];
    nextPage: number | null;
}
