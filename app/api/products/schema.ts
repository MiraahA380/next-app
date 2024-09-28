import {z} from 'zod';

const schema = z.object({
    name: z.string().min(1).max(200),
    price: z.number().min(1).max(200),
})

export default schema;