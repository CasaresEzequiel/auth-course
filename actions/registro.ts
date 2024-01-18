'use server';

import bcrypt from 'bcryptjs';

import { db } from '@/lib/db';

import * as z from 'zod';
import { RegistroSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';

export const registro = async (values: z.infer<typeof RegistroSchema>) => {
  const validateFields = RegistroSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: 'Email o contraseña inválidos!' };
  }

  const { email, password, name } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'Email en uso!' };
  }

  await db.usuario.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //ToDo: enviar email de verificación

  return { success: 'Usuario creado 👍' };
};
