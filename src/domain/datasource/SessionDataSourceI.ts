import type { SaveSessionReq } from "../dto/app/request/SaveSessionReq";
import { GetSessionRes } from "../dto/app/response/GetSessionRes";

export abstract class SessionDataSourceI {
    abstract saveSession(dto: SaveSessionReq): Promise<void>;
    abstract getSession(): Promise<GetSessionRes>;
    abstract deleteSession(): Promise<void>;
}
