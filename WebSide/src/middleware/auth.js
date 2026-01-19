// Middleware para verificar si el usuario está autenticado
const isAuthenticated = (req, res, next) => {
    // Al no tener sesión real implementada (requiere express-session configurado), 
    // simulamos comprobando si existe user en la sesión.
    if (req.session && req.session.user) {
        return next();
    }
    return res.redirect('/login');
};

// Middleware para autorizar roles específicos
const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.session || !req.session.user) {
            return res.redirect('/login');
        }

        const userRole = req.session.user.role;

        if (allowedRoles.includes(userRole)) {
            return next();
        }

        return res.status(403).send('<h1>403 - Acceso Denegado</h1><p>No tienes permisos para ver esta página.</p><a href="/">Volver</a>');
    };
};

module.exports = {
    isAuthenticated,
    authorizeRoles
};
