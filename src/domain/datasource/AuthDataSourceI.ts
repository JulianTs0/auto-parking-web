import type { AuthReq } from '../dto/auth/request/AuthReq';
import type { AuthRes } from '../dto/auth/response/AuthRes';
import type { LoginReq } from '../dto/auth/request/LoginReq';
import type { LoginRes } from '../dto/auth/response/LoginRes';
import type { RegisterReq } from '../dto/auth/request/RegisterReq';
import type { VerifyEmailReq } from '../dto/auth/request/VerifyEmailReq';
import type { EditPasswordReq } from '../dto/auth/request/EditPasswordReq';
import type { RecoverPasswordReq } from '../dto/auth/request/RecoverPasswordReq';
import type { ResendEmailReq } from '../dto/auth/request/ResendEmailReq';
import type { RegisterEmployeeReq } from '../dto/auth/request/RegisterEmployeeReq';
import type { GetOwnerRequestReq } from '../dto/auth/request/GetOwnerRequestReq';
import type { GetOwnerRequestRes } from '../dto/auth/response/GetOwnerRequestRes';
import type { AcceptOwnerRequestReq } from '../dto/auth/request/AcceptOwnerRequestReq';
import type { RequestOwnerUpgradeReq } from '../dto/auth/request/RequestOwnerUpgradeReq';
import type { UpgradeToOwnerReq } from '../dto/auth/request/UpgradeToOwnerReq';

export abstract class AuthDataSourceI {
    abstract auth(dto: AuthReq): Promise<AuthRes>;
    abstract login(dto: LoginReq): Promise<LoginRes>;
    abstract register(dto: RegisterReq): Promise<void>;
    abstract verifyEmail(dto: VerifyEmailReq): Promise<void>;
    abstract changePassword(dto: EditPasswordReq): Promise<void>;
    abstract recoverPassword(dto: RecoverPasswordReq): Promise<void>;
    abstract resendEmail(dto: ResendEmailReq): Promise<void>;
    abstract registerEmployee(
        dto: RegisterEmployeeReq,
    ): Promise<void>;
    abstract getOwnerRequests(
        dto: GetOwnerRequestReq,
    ): Promise<GetOwnerRequestRes>;
    abstract acceptOwnerRequest(
        dto: AcceptOwnerRequestReq,
    ): Promise<void>;
    abstract requestOwnerUpgrade(
        dto: RequestOwnerUpgradeReq,
    ): Promise<void>;
    abstract upgrade(dto: UpgradeToOwnerReq): Promise<void>;
}
