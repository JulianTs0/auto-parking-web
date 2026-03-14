import { UserDataSourceI, UserRepositoryI } from "../../domain";
import type { DeleteReq, EditReq, EditRes, GetByIdReq, GetByIdRes } from "../../domain";

export class UserRepository implements UserRepositoryI {
    constructor(private readonly datasource: UserDataSourceI) {}

    async getById(dto: GetByIdReq): Promise<GetByIdRes> {
        return await this.datasource.getById(dto);
    }

    async edit(dto: EditReq): Promise<EditRes> {
        return await this.datasource.edit(dto);
    }

    async delete(dto: DeleteReq): Promise<void> {
        return await this.datasource.delete(dto);
    }

}
