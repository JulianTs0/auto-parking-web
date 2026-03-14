import type { AuthReq } from '../dto/auth/request/auth-req';
import type { AuthRes } from '../dto/auth/response/auth-res';
import type { LoginReq } from '../dto/auth/request/login-req';
import type { LoginRes } from '../dto/auth/response/login-res';
import type { RegisterReq } from '../dto/auth/request/register-req';
import type { VerifyEmailReq } from '../dto/auth/request/verify-email-req';
import type { EditPasswordReq } from '../dto/auth/request/edit-password-req';
import type { RecoverPasswordReq } from '../dto/auth/request/recover-password-req';
import type { ResendEmailReq } from '../dto/auth/request/resend-email-req';
import type { RegisterEmployeeReq } from '../dto/auth/request/register-employee-req';
import type { GetOwnerRequestReq } from '../dto/auth/request/get-owner-request-req';
import type { GetOwnerRequestRes } from '../dto/auth/response/get-owner-request-res';
import type { AcceptOwnerRequestReq } from '../dto/auth/request/accept-owner-request-req';
import type { RequestOwnerUpgradeReq } from '../dto/auth/request/request-owner-upgrade-req';
import type { UpgradeToOwnerReq } from '../dto/auth/request/upgrade-to-owner-req';

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
