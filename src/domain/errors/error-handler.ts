import axios from "axios";
import type { ErrorResponse } from "./error-response";
import { ApiErrors, CLientErrors } from "./errors"

export class ErrorHandler {

    public static handleError(error: unknown): never {
        let errorResponse: ErrorResponse;

        if (axios.isAxiosError(error)) {
            if (error.response && error.response.data) {
                errorResponse = error.response.data as ErrorResponse;
            } else {
                throw new Error(CLientErrors.NETWORK_ERROR);
            }
        } else {
            throw new Error(CLientErrors.CLIENT_ERROR);
        }

        const translatedMessage = ApiErrors[errorResponse.key] || CLientErrors.UNKNOWN_ERROR;

        throw new Error(translatedMessage);
    }

}
