import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * @param id
     * @returns any Retreive the user
     * @throws ApiError
     */
    static getUsers(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns any Retreive the user
     * @throws ApiError
     */
    static postUsers(id) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }
}
