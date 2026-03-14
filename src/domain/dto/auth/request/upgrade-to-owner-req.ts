import type { Session } from "../../app/session";

export interface UpgradeToOwnerReq {
    session: Session;
    email: string;
}
