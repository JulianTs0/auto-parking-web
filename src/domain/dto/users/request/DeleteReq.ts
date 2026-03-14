import type { Session } from "../../app/Session";

export interface DeleteReq {
    session: Session;
    id: string;
    password: string;
}
