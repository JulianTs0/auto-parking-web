import { CLientErrors, SessionDataSourceI } from "../../domain";
import { GetSessionRes, SaveSessionReq, Session } from "../../domain";

export class SessionDataSource implements SessionDataSourceI {
    private readonly key = "session";

    public async saveSession(dto: SaveSessionReq): Promise<void> {
        try {
            const sessionString = JSON.stringify(dto.session);
            localStorage.setItem("session", sessionString);
        }
        catch (error) {
            throw new Error(CLientErrors.SAVE_SESSION_ERROR);
        }
    }

    async getSession(): Promise<GetSessionRes> {
        try {
            const session = localStorage.getItem(this.key);
            const sessionParsed = JSON.parse(session || "");

            if (!sessionParsed || sessionParsed === "") {
                throw new Error(CLientErrors.NO_SESSION_SAVED_ERROR);
            }

            return {
                session: Session.fromObject(sessionParsed)!,
            };
        }
        catch (error) {
            throw new Error(CLientErrors.GET_SESSION_ERROR);
        }
    }

    public async deleteSession(): Promise<void> {
        try {
            localStorage.removeItem(this.key);
        }
        catch (error) {
            throw new Error(CLientErrors.DELETE_SESSION_ERROR);
        }
    }
}
