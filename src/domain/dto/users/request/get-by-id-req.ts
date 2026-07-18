import type { Session } from '../../app/session';

export interface GetByIdReq {
    session: Session;
    id: string;
}
