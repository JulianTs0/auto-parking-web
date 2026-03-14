import type { OwnerRequestItemRes } from "./OwnerRequestItemRes";

export interface GetOwnerRequestRes {
    requests: OwnerRequestItemRes[];
    nextPage: number | null;
}
