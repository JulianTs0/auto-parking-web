import type { Session } from "../../app/session";

export interface DeleteReq {
    session: Session;
    id: string;
    password: string;
}
