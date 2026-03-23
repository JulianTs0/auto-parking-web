export class ClientErrors {
    public static readonly UNKNOWN_ERROR =
        'Ha ocurrido un error inesperado. Por favor, intentá más tarde.';
    public static readonly NETWORK_ERROR =
        'No se pudo conectar con el servidor.';
    public static readonly CLIENT_ERROR =
        'Error interno del cliente.';
    public static readonly LOGIN_ERROR_MESSAGE =
        'No se ha podido iniciar sesión';
    public static readonly NO_SESSION_SAVED_ERROR =
        'No hay sesión guardada';
    public static readonly GET_SESSION_ERROR =
        'Error obteniendo sesión';
    public static readonly SAVE_SESSION_ERROR =
        'Error guardando sesión';
    public static readonly DELETE_SESSION_ERROR =
        'Error eliminando sesión';
    public static readonly INVALID_PASSWORD =
        'La contraseña debe tener al menos: ocho carácteres, una minúscula, una mayúscula y un número.';
    public static readonly INVALID_EMAIL = 'El email es inválido.';
}

export const ApiErrors: Record<string, string> = {
    INTERNAL_ERROR: 'Error interno del servidor.',
    USER_NOT_ACTIVATED:
        'La cuenta de usuario aún no ha sido activada.',
    USER_NOT_FOUND: 'No pudimos encontrar al usuario solicitado.',
    USER_DELETED: 'Este usuario ha sido eliminado del sistema.',
    FORBIDDEN: 'No tienes permisos para realizar esta acción.',
    UNAUTHORIZED:
        'Sesión expirada o no autorizada. Por favor, ingresá nuevamente.',
    USER_ALREADY_ACTIVATED: 'Este usuario ya se encuentra activo.',
    INVALID_PASSWORD: 'La contraseña ingresada es incorrecta.',
    MISSING_REQUIRED_FIELDS: 'Faltan completar campos obligatorios.',
    INVALID_FIELDS: 'Algunos de los datos ingresados no son válidos.',
    EMAIL_ALREADY_EXISTS:
        'Este correo electrónico ya está registrado.',
    CLIENT_ALREADY_EXISTS:
        'El usuario ya es cliente. Por favor, solicita la mejora a propietario.',
    OWNER_REQUEST_ALREADY_EXISTS:
        'Ya existe una solicitud de propietario pendiente para este usuario.',
    OWNER_REQUEST_NOT_FOUND:
        'La solicitud de propietario no fue encontrada o aún no ha sido aprobada.',
    LOGIN_ERROR_MESSAGE: 'No se ha podido iniciar sesión',
};
