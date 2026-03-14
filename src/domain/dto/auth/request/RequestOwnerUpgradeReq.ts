import type { Session } from "../../app/Session";

export interface RequestOwnerUpgradeReq {
    session: Session;
    email: string;
}
