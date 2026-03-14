import type { GetByIdReq } from "../dto/users/request/GetByIdReq";
import type { GetByIdRes } from "../dto/users/response/GetByIdRes";
import type { EditReq } from "../dto/users/request/EditReq";
import type { EditRes } from "../dto/users/response/EditRes";
import type { DeleteReq } from "../dto/users/request/DeleteReq";

export abstract class UserDataSourceI {
    abstract getById(dto: GetByIdReq): Promise<GetByIdRes>;
    abstract edit(dto: EditReq): Promise<EditRes>;
    abstract delete(dto: DeleteReq): Promise<void>;
}
