import type { Session } from "../../app/session";

export interface AcceptOwnerRequestReq {
    session: Session;
    ownerEmail: string;
}
