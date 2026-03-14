import { SessionDataSourceI, SessionRepositoryI } from "../../domain";
import type { GetSessionRes, SaveSessionReq } from "../../domain";
import { SessionDataSource } from "../datasource/session-datasource";

export class SessionRepository implements SessionRepositoryI {
    private dataSource: SessionDataSourceI;

    constructor() {
        this.dataSource = new SessionDataSource();
    }

    async saveSession(dto: SaveSessionReq): Promise<void> {
        return await this.dataSource.saveSession(dto);
    }

    async getSession(): Promise<GetSessionRes> {
        return await this.dataSource.getSession();
    }

    async deleteSession(): Promise<void> {
        return await this.dataSource.deleteSession();
    }
}
