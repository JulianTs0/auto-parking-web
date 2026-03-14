import { UserDataSourceI, UserRepositoryI } from "../../domain";
import type { DeleteReq, EditReq, EditRes, GetByIdReq, GetByIdRes } from "../../domain";
import { UserDataSource } from "../datasource/user-datasource";

export class UserRepository implements UserRepositoryI {
    private dataSource: UserDataSourceI;

    constructor() {
        this.dataSource = new UserDataSource();
    }

    async getById(dto: GetByIdReq): Promise<GetByIdRes> {
        return await this.dataSource.getById(dto);
    }

    async edit(dto: EditReq): Promise<EditRes> {
        return await this.dataSource.edit(dto);
    }

    async delete(dto: DeleteReq): Promise<void> {
        return await this.dataSource.delete(dto);
    }

}
