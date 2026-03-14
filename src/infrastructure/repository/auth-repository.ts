import { AuthDataSourceI, AuthRepositoryI } from "../../domain";
import type { AcceptOwnerRequestReq, AuthReq, AuthRes, EditPasswordReq, GetOwnerRequestReq, LoginReq, LoginRes, RecoverPasswordReq, RegisterEmployeeReq, RegisterReq, RequestOwnerUpgradeReq, ResendEmailReq, UpgradeToOwnerReq, VerifyEmailReq } from "../../domain";
import { AuthDataSource } from "../datasource/auth-datasource";

export class AuthRepository implements AuthRepositoryI {

    private dataSource: AuthDataSourceI;

    constructor() {
        this.dataSource = new AuthDataSource();
    }

    async auth(dto: AuthReq): Promise<AuthRes> {
        return await this.dataSource.auth(dto);
    }

    async login(dto: LoginReq): Promise<LoginRes> {
        return await this.dataSource.login(dto);
    }

    async register(dto: RegisterReq): Promise<void> {
        return await this.dataSource.register(dto);
    }

    async verifyEmail(dto: VerifyEmailReq): Promise<void> {
        return await this.dataSource.verifyEmail(dto);
    }

    async changePassword(dto: EditPasswordReq): Promise<void> {
        return await this.dataSource.changePassword(dto);
    }

    async recoverPassword(dto: RecoverPasswordReq): Promise<void> {
        return await this.dataSource.recoverPassword(dto);
    }

    async resendEmail(dto: ResendEmailReq): Promise<void> {
        return await this.dataSource.resendEmail(dto);
    }

    async registerEmployee(dto: RegisterEmployeeReq): Promise<void> {
        return await this.dataSource.registerEmployee(dto);
    }

    async getOwnerRequests(dto: GetOwnerRequestReq): Promise<GetOwnerRequestRes> {
        return await this.dataSource.getOwnerRequests(dto);
    }

    async acceptOwnerRequest(dto: AcceptOwnerRequestReq): Promise<void> {
        return await this.dataSource.acceptOwnerRequest(dto);
    }

    async requestOwnerUpgrade(dto: RequestOwnerUpgradeReq): Promise<void> {
        return await this.dataSource.requestOwnerUpgrade(dto);
    }

    async upgrade(dto: UpgradeToOwnerReq): Promise<void> {
        return await this.dataSource.upgrade(dto);
    }
}
