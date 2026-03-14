import type { GetByIdReq } from "../dto/users/request/get-by-id-req";
import type { GetByIdRes } from "../dto/users/response/get-by-id-res";
import type { EditReq } from "../dto/users/request/edit-req";
import type { EditRes } from "../dto/users/response/edit-res";
import type { DeleteReq } from "../dto/users/request/delete-req";

export abstract class UserRepositoryI {
    abstract getById(dto: GetByIdReq): Promise<GetByIdRes>;
    abstract edit(dto: EditReq): Promise<EditRes>;
    abstract delete(dto: DeleteReq): Promise<void>;
}
