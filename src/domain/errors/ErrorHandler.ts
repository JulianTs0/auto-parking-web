import type { ErrorResponse } from "./ErrorResponse";
import { Errors, UNKNOWN_ERROR_MESSAGE } from "./Errors"

export class ErrorHandler {

    public static getMessage(error: ErrorResponse): string {
        if (!error || !error.key) {
            return UNKNOWN_ERROR_MESSAGE;
        }

        const translatedMessage = Errors[error.key];

        return translatedMessage || UNKNOWN_ERROR_MESSAGE;
    }

}
