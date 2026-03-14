import type { Session } from "../../app/Session";

export interface UpgradeToOwnerReq {
    session: Session;
    email: string;
}
