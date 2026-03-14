import type { Session } from "../../app/Session";

export interface EditPasswordReq {
    session: Session;
    newPassword: string;
}
