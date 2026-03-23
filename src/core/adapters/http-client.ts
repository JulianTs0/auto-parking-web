import { ErrorHandler } from '../../domain';
import { env } from './env';
import axios from 'axios';

export class HTTPClient {
    private readonly baseURL: string;

    constructor() {
        this.baseURL = env.BASE_URL!!;
    }

    public async get(url: string, params?: any, token?: string) {
        try {
            let finalUrl = `${this.baseURL}${url}`;
            let queryParams = undefined;

            if (typeof params === 'string') {
                finalUrl += `/${params}`;
            } else if (
                typeof params === 'object' &&
                params !== null
            ) {
                queryParams = params;
            }

            const response = await axios.get(finalUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: queryParams,
            });

            return response.data;
        } catch (error: any) {
            ErrorHandler.handleError(error);
        }
    }

    public async post(url: string, body?: any, token?: string) {
        try {
            const response = await axios.post(
                this.baseURL + url,
                body,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );

            return response.data;
        } catch (error: any) {
            ErrorHandler.handleError(error);
        }
    }

    public async put(url: string, body?: any, token?: string) {
        try {
            const response = await axios.put(
                this.baseURL + url,
                body,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );

            return response.data;
        } catch (error: any) {
            ErrorHandler.handleError(error);
        }
    }

    public async patch(url: string, body?: any, token?: string) {
        try {
            const response = await axios.patch(
                this.baseURL + url,
                body,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );

            return response.data;
        } catch (error: any) {
            ErrorHandler.handleError(error);
        }
    }

    public async delete(url: string, params?: any, token?: string) {
        try {
            const response = await axios.delete(this.baseURL + url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: params,
            });

            return response.data;
        } catch (error: any) {
            ErrorHandler.handleError(error);
        }
    }
}
