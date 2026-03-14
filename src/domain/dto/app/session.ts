import { Token } from "./token";

export class Session {

    constructor(
        public token: Token
    ) { }

    public static fromObject(object: { [key: string]: any }): Session | null {
        if (!object) return null;

        return new Session(
            Token.fromObject(object.token)!,
        )
    };

    public getAccessToken(): string {
        return this.token.accessToken;
    }

}
