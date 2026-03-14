import type { Session } from "../../app/session";

export interface EditPasswordReq {
    session: Session;
    newPassword: string;
}
