export class Regex {
    public static readonly EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    public static readonly PASSWORD =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S{8,}$/;

    public static readonly FULLNAME =
        /^[\p{L}]{2,20}(?:[ '-][\p{L}]{2,20})*$/u;
}
