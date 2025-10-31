import { createRoute } from "@hono/zod-openapi";
import paramSchema from "./input";
import userSchema from "./output";
import { Handler } from "hono";

const route = createRoute({
    method: 'get',
    path: '/users/{id}',
    request: {
        params: paramSchema
    },
    responses: {
        200: {
            content: {
                'application/json': {
                    schema: userSchema
                }
            },
            description: "Retreive the user",
        },
    },
});


const postRoute = createRoute({
     method: 'post',
    path: '/users/{id}',
    request: {
        params: paramSchema
    },
    responses: {
        200: {
            content: {
                'application/json': {
                    schema: userSchema
                }
            },
            description: "Retreive the user",
        },
    },

})


export { postRoute };

export default route;

