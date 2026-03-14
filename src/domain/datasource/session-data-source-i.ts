import type { SaveSessionReq } from '../dto/app/request/save-session-req';
import type { GetSessionRes } from '../dto/app/response/get-session-res';

export abstract class SessionDataSourceI {
    abstract saveSession(dto: SaveSessionReq): Promise<void>;
    abstract getSession(): Promise<GetSessionRes>;
    abstract deleteSession(): Promise<void>;
}
