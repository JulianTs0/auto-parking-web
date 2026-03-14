import type { Session } from "../../app/session";

export interface RegisterEmployeeReq {
    session: Session;
    fullName: string;
    email: string;
    phoneNumber: string | null;
    password: string;
}
