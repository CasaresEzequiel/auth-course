import { db } from '@/lib/db';

export const getUserByEmail = async (email: string) => {
  try {
    const usuario = await db.usuario.findUnique({ where: { email } });
    return usuario;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const usuario = await db.usuario.findUnique({ where: { id } });
    return usuario;
  } catch {
    return null;
  }
};
