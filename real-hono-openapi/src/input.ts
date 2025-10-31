import { z  } from "@hono/zod-openapi"



const paramSchema = z.object({
    id: z.string().min(3).max(5)
    .openapi({
        param: {
              name: 'id',
              in: 'path'
        },
        example: "12234"
    })
});

export default paramSchema;