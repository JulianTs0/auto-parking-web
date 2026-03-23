import { ClientErrors, SessionDataSourceI } from '../../domain';
import {
    type GetSessionRes,
    type SaveSessionReq,
    Session,
} from '../../domain';

export class SessionDataSource implements SessionDataSourceI {
    private readonly key = 'session';

    public async saveSession(dto: SaveSessionReq): Promise<void> {
        try {
            const sessionString = JSON.stringify(dto.session);
            localStorage.setItem('session', sessionString);
        } catch (error) {
            throw new Error(ClientErrors.SAVE_SESSION_ERROR);
        }
    }

    async getSession(): Promise<GetSessionRes> {
        try {
            const session = localStorage.getItem(this.key);
            const sessionParsed = JSON.parse(session || '');

            if (!sessionParsed || sessionParsed === '') {
                throw new Error(ClientErrors.NO_SESSION_SAVED_ERROR);
            }

            return {
                session: Session.fromObject(sessionParsed)!,
            };
        } catch (error) {
            throw new Error(ClientErrors.GET_SESSION_ERROR);
        }
    }

    public async deleteSession(): Promise<void> {
        try {
            localStorage.removeItem(this.key);
        } catch (error) {
            throw new Error(ClientErrors.DELETE_SESSION_ERROR);
        }
    }
}
