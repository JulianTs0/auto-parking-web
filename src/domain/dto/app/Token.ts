export class Token {

    constructor(
        public accessToken: string
    ) { }

    public static fromObject(object: { [key: string]: any }): Token | null {
        if (!object) return null;

        return new Token(
            object.accessToken
        )
    };

}
