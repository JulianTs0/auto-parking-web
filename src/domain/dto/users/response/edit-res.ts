import { Role } from "../../../const/Role";
import { UserStatus } from "../../../const/UserStatus";

export interface EditRes {
    id: string;
    fullName: string;
    email: string;
    phoneNumber: string | null;
    status: UserStatus;
    roles: Role[];
    createdAt: string;
    updatedAt: string;
}
