import type { SaveSessionReq } from '../dto/app/request/SaveSessionReq';
import type { GetSessionRes } from '../dto/app/response/GetSessionRes';

export abstract class SessionRepositoryI {
    abstract saveSession(dto: SaveSessionReq): Promise<void>;
    abstract getSession(): Promise<GetSessionRes>;
    abstract deleteSession(): Promise<void>;
}
