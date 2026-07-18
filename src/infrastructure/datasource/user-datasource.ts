import { HTTPClient } from '../../core';
import { UserDataSourceI } from '../../domain';
import type {
    DeleteReq,
    EditReq,
    EditRes,
    GetByIdReq,
    GetByIdRes,
} from '../../domain';

export class UserDataSource implements UserDataSourceI {
    private readonly client: HTTPClient;

    constructor() {
        this.client = new HTTPClient();
    }

    async getById(dto: GetByIdReq): Promise<GetByIdRes> {
        const { session, id } = dto;
        return await this.client.get(
            `/users/${id}`,
            session.getAccessToken(),
        );
    }

    async edit(dto: EditReq): Promise<EditRes> {
        const { session, id, ...body } = dto;
        return await this.client.patch(
            `/users/${id}`,
            body,
            session.getAccessToken(),
        );
    }

    async delete(dto: DeleteReq): Promise<void> {
        const { session, id, ...body } = dto;
        return await this.client.delete(
            `/users/${id}`,
            body,
            session.getAccessToken(),
        );
    }
}
