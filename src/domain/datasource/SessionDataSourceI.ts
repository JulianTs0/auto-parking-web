import type { Session } from "../dto/app/Session";
import type { SaveSessionReq } from "../dto/app/request/SaveSessionReq";

export abstract class SessionDataSourceI {
    abstract saveSession(dto: SaveSessionReq): Promise<void>;
    abstract getSession(): Promise<Session | null>;
    abstract deleteSession(): Promise<void>;
}
