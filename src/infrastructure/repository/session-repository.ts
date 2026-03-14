import { SessionDataSourceI, SessionRepositoryI } from "../../domain";
import type { SaveSessionReq, Session } from "../../domain";

export class SessionRepository implements SessionRepositoryI {
    constructor(private readonly datasource: SessionDataSourceI) {}

    async saveSession(dto: SaveSessionReq): Promise<void> {
        return await this.datasource.saveSession(dto);
    }

    async getSession(): Promise<Session | null> {
        return await this.datasource.getSession();
    }

    async deleteSession(): Promise<void> {
        return await this.datasource.deleteSession();
    }
}
