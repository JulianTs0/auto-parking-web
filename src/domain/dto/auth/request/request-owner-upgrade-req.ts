import type { Session } from "../../app/session";

export interface RequestOwnerUpgradeReq {
    session: Session;
    email: string;
}
