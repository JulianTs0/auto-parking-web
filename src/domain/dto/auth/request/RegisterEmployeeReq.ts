import type { Session } from "../../app/Session";

export interface RegisterEmployeeReq {
    session: Session;
    fullName: string;
    email: string;
    phoneNumber: string | null;
    password: string;
}
