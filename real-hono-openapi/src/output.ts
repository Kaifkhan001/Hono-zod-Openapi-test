import { z } from "@hono/zod-openapi"


const userSchema = z.object({
    id: z.string()
    .openapi({
        example: '123'
    }),
    name: z.string().openapi({
        example: 'khan'
    }),
    age: z.number().openapi({
        example: 123
    })
});

export default userSchema