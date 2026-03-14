import type { Session } from "../../app/Session";

export interface EditReq {
    session: Session;
    id: string;
    fullName: string;
    phoneNumber: string | null;
}
