export const Errors: Record<string, string> = {
    'INTERNAL_ERROR': 'Error interno del servidor.',
    'USER_NOT_ACTIVATED': 'La cuenta de usuario aún no ha sido activada.',
    'USER_NOT_FOUND': 'No pudimos encontrar al usuario solicitado.',
    'USER_DELETED': 'Este usuario ha sido eliminado del sistema.',
    'FORBIDDEN': 'No tienes permisos para realizar esta acción.',
    'UNAUTHORIZED': 'Sesión expirada o no autorizada. Por favor, ingresá nuevamente.',
    'USER_ALREADY_ACTIVATED': 'Este usuario ya se encuentra activo.',
    'INVALID_PASSWORD': 'La contraseña ingresada es incorrecta.',
    'MISSING_REQUIRED_FIELDS': 'Faltan completar campos obligatorios.',
    'INVALID_FIELDS': 'Algunos de los datos ingresados no son válidos.',
    'EMAIL_ALREADY_EXISTS': 'Este correo electrónico ya está registrado.',
    'CLIENT_ALREADY_EXISTS': 'El usuario ya es cliente. Por favor, solicita la mejora a propietario.',
    'OWNER_REQUEST_ALREADY_EXISTS': 'Ya existe una solicitud de propietario pendiente para este usuario.',
    'OWNER_REQUEST_NOT_FOUND': 'La solicitud de propietario no fue encontrada o aún no ha sido aprobada.',
};

export const UNKNOWN_ERROR_MESSAGE = 'Ha ocurrido un error inesperado. Por favor, intenta más tarde.';
