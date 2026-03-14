import type { Session } from "../../app/Session";

export interface AcceptOwnerRequestReq {
    session: Session;
    ownerEmail: string;
}
