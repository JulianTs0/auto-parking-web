import type { Error } from "./Error";
import { Errors } from "./errors";

export class ErrorHandler {

    public static handleError(error: Error): string {
        switch (error.message) {
            case "Internal error":
                return Errors.INTERNAL_ERROR;
            
            case "Unknown error":
                return Errors.UNKNOWN_ERROR;
              
            default:
                return Errors.INTERNAL_ERROR;
        }
    }

}
