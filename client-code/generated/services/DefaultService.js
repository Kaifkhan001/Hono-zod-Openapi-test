"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class DefaultService {
    /**
     * @param id
     * @returns any Retreive the user
     * @throws ApiError
     */
    static getUsers(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }
}
exports.DefaultService = DefaultService;
