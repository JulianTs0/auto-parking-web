import type { UserStatus, Role } from "../../../../core";

export interface AuthRes {
    id: string;
    fullName: string;
    email: string;
    phoneNumber: string | null;
    status: UserStatus;
    roles: Role[];
    createdAt: string;
    updatedAt: string;
}
