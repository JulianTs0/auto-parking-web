import { HTTPClient } from '../../core';
import { AuthDataSourceI, ClientErrors } from '../../domain';
import type {
    AcceptOwnerRequestReq,
    AuthReq,
    AuthRes,
    EditPasswordReq,
    GetOwnerRequestReq,
    GetOwnerRequestRes,
    LoginReq,
    LoginRes,
    RecoverPasswordReq,
    RegisterEmployeeReq,
    RegisterReq,
    RequestOwnerUpgradeReq,
    ResendEmailReq,
    UpgradeToOwnerReq,
    VerifyEmailReq,
} from '../../domain';

export class AuthDataSource implements AuthDataSourceI {
    private readonly client: HTTPClient;

    constructor() {
        this.client = new HTTPClient();
    }

    async auth(dto: AuthReq): Promise<AuthRes> {
        return await this.client.get(
            '/auth',
            undefined,
            dto.authorization,
        );
    }

    async login(dto: LoginReq): Promise<LoginRes> {
        const response = await this.client.post('/auth/login', dto);

        const token = response.token;

        if (!token) {
            throw new Error(ClientErrors.LOGIN_ERROR_MESSAGE);
        }

        return response;
    }

    async register(dto: RegisterReq): Promise<void> {
        return await this.client.post('/web/auth/register', dto);
    }

    async verifyEmail(dto: VerifyEmailReq): Promise<void> {
        return await this.client.post('/auth/verify', dto);
    }

    async changePassword(dto: EditPasswordReq): Promise<void> {
        const { session, ...payload } = dto;
        return await this.client.patch(
            '/auth/password',
            payload,
            session.getAccessToken(),
        );
    }

    async recoverPassword(dto: RecoverPasswordReq): Promise<void> {
        return await this.client.post('/auth/recover', dto);
    }

    async resendEmail(dto: ResendEmailReq): Promise<void> {
        return await this.client.post('/auth/email/resend', dto);
    }

    async registerEmployee(dto: RegisterEmployeeReq): Promise<void> {
        const { session, ...body } = dto;
        return await this.client.post(
            '/web/auth/employee/register',
            body,
            session.getAccessToken(),
        );
    }

    async getOwnerRequests(
        dto: GetOwnerRequestReq,
    ): Promise<GetOwnerRequestRes> {
        const { session, ...payload } = dto;
        return await this.client.get(
            '/web/auth/owner/requests',
            payload,
            session.getAccessToken(),
        );
    }

    async acceptOwnerRequest(
        dto: AcceptOwnerRequestReq,
    ): Promise<void> {
        const { session, ...body } = dto;
        return await this.client.patch(
            '/web/auth/accept/owner',
            body,
            session.getAccessToken(),
        );
    }

    async requestOwnerUpgrade(
        dto: RequestOwnerUpgradeReq,
    ): Promise<void> {
        const { session, ...body } = dto;
        return await this.client.patch(
            '/web/auth/request/upgrade/owner',
            body,
            session.getAccessToken(),
        );
    }

    async upgrade(dto: UpgradeToOwnerReq): Promise<void> {
        const { session, ...body } = dto;
        return await this.client.patch(
            '/web/auth/upgrade',
            body,
            session.getAccessToken(),
        );
    }
}
