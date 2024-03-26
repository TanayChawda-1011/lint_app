import *  as z from 'zod';

export const ThreadValidation = z.object({
    thread: z.string().nonempty().min(3, { message: 'MINIMUM 3 CHARACTERS' }),
    accountId: z.string(),
})

export const CommentValidation = z.object({
    thread: z.string().nonempty().min(3, { message: 'MINIMUM 3 CHARACTERS' }),
})