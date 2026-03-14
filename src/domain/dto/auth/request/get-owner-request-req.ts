import type { Session } from "../../app/session";

export interface GetOwnerRequestReq {
    session: Session;
    page: number;
    size: number;
}
