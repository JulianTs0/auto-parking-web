import type { GetByIdReq } from "../dto/users/request/GetByIdReq";
import type { GetByIdRes } from "../dto/users/response/GetByIdRes";
import type { EditReq } from "../dto/users/request/EditReq";
import type { EditRes } from "../dto/users/response/EditRes";
import type { DeleteReq } from "../dto/users/request/DeleteReq";
import type { GetOwnerRequestReq } from "../dto/auth/request/GetOwnerRequestReq";
import type { GetOwnerRequestRes } from "../dto/users/response/GetOwnerRequestRes";

export abstract class UserDataSourceI {
    abstract getById(dto: GetByIdReq): Promise<GetByIdRes>;
    abstract edit(dto: EditReq): Promise<EditRes>;
    abstract delete(dto: DeleteReq): Promise<void>;
    abstract getOwnerRequests(dto: GetOwnerRequestReq): Promise<GetOwnerRequestRes>;
}
