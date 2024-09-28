import {z} from 'zod';

const schema = z.object({
    name: z.string().min(1),
    email: z.string().email({message: 'Email is required'}),
});

export default schema;