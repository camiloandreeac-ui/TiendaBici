const { User } = require('../models');

const authController = {
    showLogin: (req, res) => {
        res.render('pages/login', { error: null });
    },

    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            // Buscar usuario
            const user = await User.findOne({ where: { email } });

            // Verificación simple (En prod usar bcrypt para hash)
            if (user && user.password === password) {
                // Guardar en sesión
                req.session.user = {
                    id: user.id,
                    name: user.name,
                    role: user.role
                };

                // Redirección basada en Rol
                if (user.role === 'administrador') return res.redirect('/dashboard/admin');
                if (user.role === 'gerente') return res.redirect('/dashboard/manager');
                if (user.role === 'vendedor') return res.redirect('/dashboard/sales');
                return res.redirect('/');
            }

            res.render('pages/login', { error: 'Credenciales inválidas' });

        } catch (error) {
            console.error(error);
            res.render('pages/login', { error: 'Error del servidor' });
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    }
};

module.exports = authController;
