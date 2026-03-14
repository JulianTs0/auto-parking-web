import type { Session } from "../../app/session";

export interface EditReq {
    session: Session;
    id: string;
    fullName: string;
    phoneNumber: string | null;
}
