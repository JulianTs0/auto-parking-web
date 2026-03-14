import type { Session } from "../../app/Session";

export interface GetOwnerRequestReq {
    session: Session;
    page: number;
    size: number;
}
