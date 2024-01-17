'use server';

import * as z from 'zod';
import { RegistroSchema } from '@/schemas';

export const registro = async (values: z.infer<typeof RegistroSchema>) => {
  const validateFields = RegistroSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: 'Email o contraseña inválidos!' };
  }

  return { success: '👍' };
};
