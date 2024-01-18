/**
 * Arreglo con las rutas que pueden ser accedidas por todos los usuarios.
 * Estas rutas no requieren autenticación.
 * @type {string[]}
 */

export const publicRoutes = ['/'];

/**
 * Arreglo con las rutas utilizadas para la autenticación.
 * Estas rutas redirigen a los usuarios logueados a /settings.
 * @type {string[]}
 */

export const authRoutes = ['/auth/login', '/auth/registro'];

/**
 * Prefijo para las rutas de la API de autenticación
 * @type {string}
 */

export const apiAuthPrefix = '/api/auth';

/**
 * La ruta por defecto para la redirección de usuarios logueados.
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = '/settings';
