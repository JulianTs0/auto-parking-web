import type { ErrorResponse } from './error-response';
import { ApiErrors, ClientErrors } from './errors';

export class ErrorHandler {
    public static handleError(error: any): never {
        let errorResponse: ErrorResponse;

        if (error.response && error.response.data) {
            errorResponse = error.response.data as ErrorResponse;
        } else {
            throw new Error(ClientErrors.NETWORK_ERROR);
        }

        const translatedMessage =
            ApiErrors[errorResponse.key] ||
            ClientErrors.UNKNOWN_ERROR;

        throw new Error(translatedMessage);
    }

    public static resolveError(error: unknown): string {
        if (typeof error === 'string') return error;

        if (error instanceof Error) return error.message;

        return ClientErrors.UNKNOWN_ERROR;
    }
}
