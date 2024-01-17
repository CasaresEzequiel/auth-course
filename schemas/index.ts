import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Email inválido.' }),
  password: z.string().min(1, { message: 'Contraseña incorrecta' }),
});

export const RegistroSchema = z.object({
  email: z.string().email({ message: 'Email inválido.' }),
  password: z
    .string()
    .min(6, { message: 'La contraseña debe contener al menos 6 caracteres' }),
  name: z.string().min(1, { message: 'El nombre es obligatorio' }),
});
